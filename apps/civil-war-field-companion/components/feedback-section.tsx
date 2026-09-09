import { feedbackUrl, feedbackIssuesUrl, type FeedbackContext } from '@/lib/feedback';
import { FeedbackForm } from '@/components/feedback-form';

export function FeedbackSection({ context }: { context: FeedbackContext }) {
  return <aside className="feedback-panel" id="feedback" aria-labelledby="feedback-title">
    <div><p className="kicker">Help improve the companion</p><h2 id="feedback-title">Spotted something? Share an idea.</h2><p>Suggest a correction, report a problem, or recommend an image. This page’s details are included automatically.</p>
    <div className="feedback-actions feedback-secondary">
      <a className="text-link" href={feedbackIssuesUrl} target="_blank" rel="noreferrer">View suggestions ↗</a>
      <a className="text-link" href={feedbackUrl(context)} target="_blank" rel="noreferrer">Use the GitHub form instead ↗</a>
    </div></div>
    <FeedbackForm context={context} />
  </aside>;
}
