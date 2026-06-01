import { Link } from "react-router-dom";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Understanding Anxiety: Signs, Symptoms, and Coping Mechanisms",
    slug: "understanding-anxiety",
    excerpt:
      "Anxiety can manifest in many different ways. Learn how to recognize the emotional and physical signs, and discover effective strategies to manage daily stress.",
    date: "May 28, 2026",
    category: "Mental Health",
  },
  {
    id: 2,
    title: "Navigating Life Transitions: How to Embrace Change Gracefully",
    slug: "navigating-life-transitions",
    excerpt:
      "Whether it is a career change, a breakup, or moving to a new city, major life transitions can be overwhelming. Here is how psychotherapy can support you.",
    date: "May 15, 2026",
    category: "Personal Growth",
  },
  {
    id: 3,
    title: "The Power of Online Therapy: Breaking Barriers to Mental Wellbeing",
    slug: "power-of-online-therapy",
    excerpt:
      "Is online therapy as effective as in-person sessions? Explore the benefits of remote counseling and how it fits into a busy modern lifestyle.",
    date: "April 30, 2026",
    category: "Therapy",
  },
];

function BlogPage() {
  return (
    <div className="inner-page-padding">
      <div className="container">
        <div className="services-hub-header">
          <span className="section-label">Insights & Articles</span>
          <h1 className="page-title">Our Blog</h1>
          <p className="page-subtitle">
            Exploring mental health, emotional wellbeing, and practical
            psychological strategies for everyday life.
          </p>
        </div>

        <div className="services-hub-grid">
          {BLOG_POSTS.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.id}
              className="service-hub-card"
            >
              <div className="service-hub-icon"></div>
              <div className="service-hub-info">
                <span
                  className="section-label"
                  style={{ fontSize: "12px", marginBottom: "0" }}
                >
                  {post.category} • {post.date}
                </span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="service-hub-link">Read Full Article</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
