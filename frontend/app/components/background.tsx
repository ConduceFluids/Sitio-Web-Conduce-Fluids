export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-[#0f172a] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#334155,transparent)]"></div>
    </div>
  );
}

