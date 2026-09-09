import { ArrowUpRight, MessageSquareText } from 'lucide-react';
import { feedbackUrl, feedbackIssuesUrl, type FeedbackContext } from '@/lib/feedback';

export function FeedbackSection({ context }: { context: FeedbackContext }) {
  return <aside className="feedback-panel" id="feedback" aria-labelledby="feedback-title">
    <div><p className="kicker">Help improve the companion</p><h2 id="feedback-title">Spotted something? Share an idea.</h2><p>Suggest a correction, report a problem, or recommend an image. The form includes this page’s details automatically.</p></div>
    <div className="feedback-actions">
      <a className="primary-button" href={feedbackUrl(context)} target="_blank" rel="noreferrer"><MessageSquareText size={16} /> Suggest a change <ArrowUpRight size={16} /></a>
      <small>Opens a GitHub form. GitHub sign-in required; suggestions are public.</small>
      <a className="text-link" href={feedbackIssuesUrl} target="_blank" rel="noreferrer">View suggestions ↗</a>
    </div>
  </aside>;
}
