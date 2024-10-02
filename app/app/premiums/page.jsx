import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'Premiums'
};

const explainer = `
This page is dedicated to showcasing premium features or services. You can add a description here about what sets premium features apart from the classic ones.

Feel free to deploy this site to Netlify, and if you have forms or any other interactive content, you can use Netlify’s features like Forms and Edge Functions.
`;

export default async function Page() {
    return (
        <>
            <h1>Netlify Premiums</h1>
            <Markdown content={explainer} />
            <div className="flex w-full pt-12 justify-center">
                <FeedbackForm />
            </div>
        </>
    );
}
