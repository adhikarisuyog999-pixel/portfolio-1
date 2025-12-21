import { useState } from "react";
import { Calendar, ExternalLink, Heart } from "lucide-react";

const BlogSection = ({
  sectionRef,
  visibleSections,
  cardBg,
  borderColor,
  textSecondary,
  hoverBg,
}) => {
  // INITIAL BLOG DATA (STATIC → STATE)
  const initialBlogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt:
        "Learn the fundamentals of React and start building modern web applications with hooks, components, and state management.",
      date: "Dec 15, 2025",
      readTime: "5 min read",
      likes: 2,
      comments: 5,
      emoji: "📱",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "The Power of Tailwind CSS",
      excerpt:
        "Discover how utility-first CSS can speed up your development workflow and create beautiful, responsive designs faster.",
      date: "Dec 10, 2025",
      readTime: "7 min read",
      likes: 9,
      comments: 2,
      emoji: "🎨",
      color: "bg-purple-500",
    },
    {
      id: 3,
      title: "Modern Web Design Trends",
      excerpt:
        "Explore the latest trends shaping the future of web design in 2025, from glassmorphism to micro-interactions.",
      date: "Dec 5, 2025",
      readTime: "6 min read",
      likes: 3,
      comments: 5,
      emoji: "🚀",
      color: "bg-pink-500",
    },
  ];

  // STATE
  const [posts, setPosts] = useState(initialBlogPosts);

  // LIKE HANDLER
  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center px-4 py-20 transition-all duration-1000 ${
        visibleSections.has("blog")
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-10">
          Blog Posts
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <div
              key={post.id}
              className={`${cardBg} rounded-2xl overflow-hidden shadow-lg border ${borderColor} ${hoverBg} cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500`}
              style={{
                transitionDelay: visibleSections.has("blog")
                  ? `${idx * 150}ms`
                  : "0ms",
                opacity: visibleSections.has("blog") ? 1 : 0,
              }}
            >
              <div
                className={`h-48 ${post.color} flex items-center justify-center text-6xl transition-transform duration-300 hover:scale-110`}
              >
                {post.emoji}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span
                    className={`text-sm ${textSecondary} flex items-center gap-1`}
                  >
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className={`text-sm ${textSecondary}`}>
                    • {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>

                <p className={`${textSecondary} mb-4`}>{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1 text-sm hover:text-red-500 transition-colors cursor-pointer">
                      <Heart
                        className="w-4 h-4"
                        onClick={(e) => {
                          e.stopImmediatePropagation(); //didnt work
                          handleLike(post.id);
                        }}
                      />
                      {post.likes}
                    </span>

                    <span className="flex items-center gap-1 text-sm hover:text-blue-500 transition-colors cursor-pointer">
                      💬 {post.comments}
                    </span>
                  </div>

                  <button className="flex items-center gap-1 text-blue-500 hover:text-blue-600 hover:gap-2 transition-all text-sm font-semibold">
                    Read <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
