'use client';

import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import { FEEDBACK_ENDPOINT, type FeedbackContext } from '@/lib/feedback';

export function FeedbackForm({ context }: { context: FeedbackContext }) {
  const prefix = useId();
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const [error, setError] = useState('');
  const [issueUrl, setIssueUrl] = useState('');
  const attempt = useRef<{ payload: string; id: string } | null>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const data = { path: context.path, category: fields.get('category'), summary: fields.get('summary'), details: fields.get('details'), sources: fields.get('sources'), website: fields.get('website') };
    const payload = JSON.stringify(data);
    if (!attempt.current || attempt.current.payload !== payload) attempt.current = { payload, id: crypto.randomUUID() };
    setBusy(true); setError('');
    try {
      const response = await fetch(FEEDBACK_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, id: attempt.current.id }), signal: AbortSignal.timeout(45000), credentials: 'omit' });
      const result = await response.json();
      if (!response.ok || result.pending) throw new Error(result.error || 'We could not send your suggestion. Please try again.');
      if (!/^https:\/\/github\.com\/Beau-Gosse-dev\/Beau-Gosse-dev\.github\.io\/issues\/\d+$/.test(result.issueUrl ?? '')) throw new Error('We could not confirm your suggestion. Please retry shortly.');
      setIssueUrl(result.issueUrl);
    } catch (failure) {
      setError(failure instanceof Error && !['TypeError', 'TimeoutError', 'AbortError'].includes(failure.name) ? failure.message : 'Could not connect. Your text is still here; please try again.');
    } finally { setBusy(false); }
  }
  if (issueUrl) return <div className="feedback-success" role="status"><h3>Thank you for helping improve the companion.</h3><p>Your suggestion has been submitted.</p><a className="text-link" href={issueUrl} target="_blank" rel="noreferrer">View your suggestion <ArrowUpRight size={14} /></a><p className="feedback-hint">You can read updates at this link without an account.</p></div>;
  return <form className="feedback-form" onSubmit={submit} aria-label="Suggest a change">
    <div className="feedback-context"><span>About this page</span><strong>{context.title}</strong></div>
    <div className="feedback-form-row">
      <label htmlFor={`${prefix}-category`}>Kind of suggestion<select name="category" id={`${prefix}-category`} required defaultValue=""><option value="" disabled>Choose one</option>{['Historical correction', 'Website problem', 'Image or map suggestion', 'New feature or other idea'].map((kind) => <option key={kind}>{kind}</option>)}</select></label>
      <label htmlFor={`${prefix}-summary`}>Short summary<input name="summary" id={`${prefix}-summary`} required minLength={5} maxLength={100} placeholder="What would you like changed?" /></label>
    </div>
    <label htmlFor={`${prefix}-details`}>Your suggestion<textarea name="details" id={`${prefix}-details`} required minLength={15} maxLength={4000} rows={5} placeholder="Tell us what you noticed and how we could improve it." /></label>
    <label htmlFor={`${prefix}-sources`}>Sources or links <span className="feedback-optional">(optional)</span><textarea name="sources" id={`${prefix}-sources`} maxLength={2000} rows={2} placeholder="A link, book title and page number, or image collection can help." /></label>
    <div className="feedback-honeypot" aria-hidden="true"><label htmlFor={`${prefix}-website`}>Leave this field blank<input id={`${prefix}-website`} name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <p className="feedback-hint">No account needed. Suggestions are public on GitHub, so please leave out private information.</p>
    {error && <p className="feedback-error" role="alert">{error}</p>}
    <button className="primary-button" type="submit" disabled={busy || !ready}><Send size={15} />{busy ? 'Sending…' : 'Send suggestion'}</button>
    <noscript><p>This form needs JavaScript. You can use the GitHub form linked below instead.</p></noscript>
  </form>;
}
