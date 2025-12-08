// src/components/blog components/BlogDetaile.tsx
interface BlogDetailsProps {
  params: { id: string };
}

export default function BlogDetails({ params }: BlogDetailsProps) {
  const { id } = params;

  return (
    <div>
      <h1>Blog Details</h1>
      <p>Blog ID: {id}</p>
      {/* You can fetch blog data here using the ID */}
    </div>
  );
}
