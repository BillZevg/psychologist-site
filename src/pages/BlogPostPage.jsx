import { Link, useParams } from "react-router-dom";

const BLOG_POSTS_DATA = {
  "understanding-anxiety": {
    title: "Understanding Anxiety: Signs, Symptoms, and Coping Mechanisms",
    date: "May 28, 2026",
    category: "Mental Health",
    content: (
      <>
        <p>
          Anxiety is a normal human emotion that everyone experiences from time
          to time. However, when feelings of intense fear and distress become
          overwhelming and interfere with daily life, it may be a sign of an
          anxiety disorder.
        </p>

        <h2>Common Signs and Symptoms</h2>
        <p>
          Anxiety doesn't just affect your mind; it manifests physically as
          well. Emotional symptoms include constant worrying, irritability, and
          a sense of impending doom. Physically, you might experience a racing
          heart, shallow breathing, sweating, and persistent fatigue.
        </p>

        <h2>Effective Coping Strategies</h2>
        <p>
          Managing anxiety is a journey that involves finding what works best
          for your unique nervous system. Here are a few scientifically proven
          techniques:
        </p>
        <p>
          <strong>1. Grounding Exercises:</strong> The 5-4-3-2-1 method helps
          bring your focus back to the present moment by identifying things you
          can see, touch, hear, smell, and taste around you.
        </p>
        <p>
          <strong>2. Controlled Breathing:</strong> Deep, diaphragmatic
          breathing (like box breathing) signals your brain to activate the
          parasympathetic nervous system, slowing down your heart rate.
        </p>

        <h2>When to Seek Professional Help</h2>
        <p>
          While self-care strategies are incredibly valuable, working with a
          licensed psychotherapist provides you with personalized tools and a
          safe space to explore the root causes of your anxiety.
        </p>
      </>
    ),
  },
  "navigating-life-transitions": {
    title: "Navigating Life Transitions: How to Embrace Change Gracefully",
    date: "May 15, 2026",
    category: "Personal Growth",
    content: (
      <>
        <p>
          Change is the only constant in life, yet major transitions—such as
          changing careers, ending a relationship, or relocating—can leave us
          feeling ungrounded and anxious.
        </p>

        <h2>Why Transitions Are Challenging</h2>
        <p>
          Every transition involves an ending, a period of uncertainty, and a
          new beginning. It is completely normal to grieve what you left behind,
          even if the change was something you actively chose and wanted.
        </p>

        <h2>Embracing the Unfamiliar</h2>
        <p>
          To navigate these phases gracefully, it is essential to practice
          self-compassion. Give yourself permission to not have everything
          figured out immediately. Establishing small, predictable daily
          routines can provide a sense of stability when everything else feels
          in flux.
        </p>
      </>
    ),
  },
  "power-of-online-therapy": {
    title:
      "The Power of Online Therapy: Breaking Barriers to Mental Well-being",
    date: "April 30, 2026",
    category: "Therapy",
    content: (
      <>
        <p>
          In recent years, teletherapy has transformed how people access mental
          health support. No longer restricted by geographical boundaries or
          rigid commuting times, individuals can now prioritize their wellbeing
          from the comfort of their own space.
        </p>

        <h2>Is It As Effective As In-Person Therapy?</h2>
        <p>
          Clinical research consistently shows that online therapy yields
          identical outcomes to traditional face-to-face counseling for a wide
          range of concerns, including depression, stress management, and
          anxiety.
        </p>

        <h2>The Key Benefits</h2>
        <p>
          Beyond comfort, online therapy offers unmatched flexibility for busy
          professionals, expats, or those living in remote areas where finding
          the right specialist can be difficult.
        </p>
      </>
    ),
  },
};

function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS_DATA[slug];

  if (!post) {
    return (
      <div className="inner-page-padding page-not-found">
        <div className="container">
          <h2>Article Not Found</h2>
          <p>The blog post you are looking for does not exist.</p>
          <Link to="/blog" className="btn-outline">
            Back To Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="inner-page-padding">
      <div className="container">
        <Link to="/blog" className="back-to-blog-link">
          &larr; Back to All Articles
        </Link>
        <div className="services-hub-header blog-single-header">
          <span className="section-label">
            {post.category} • {post.date}
          </span>
          <h1 className="page-title">{post.title}</h1>
        </div>

        <div className="service-single-layout">
          <article className="service-detailed-text">{post.content}</article>

          <aside className="service-single-sidebar">
            <div className="sidebar-card">
              <h3>Need Support?</h3>
              <p className="sidebar-support-text">
                If you are struggling with any of the topics discussed in our
                blog, don't hesitate to reach out for a professional counseling
                session.
              </p>
              <Link to="/contact" className="btn btn-sidebar-action">
                Contact Dr. S
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
export default BlogPostPage;
