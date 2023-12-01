export function AppPost({ id, title, image, content, tags }) {
  function getImgUrl(name) {
    return new URL("../assets/img/postImg/" + name, import.meta.url).href;
  }

  const MapColor = {
    html: " bg-sky-600",
    css: " bg-amber-800",
    js: " bg-red-950",
    php: " bg-gray-400",
  };

  return (
    <div key={id} className="card_container p-4 w-full md:w-6/12 xl:w-3/12">
      <div className="card p-4 min-h-[300px] h-full bg_carbon shadow-black shadow-xl rounded-2xl text-slate-50">
        <div className="h-48">
          <img
            src={getImgUrl(image + ".jpg")}
            className="h-full object-cover w-full"
            alt="ciao"
          />
        </div>
        <h3 className="text-[30px] font-bold text-center mt-3">{title}</h3>
        <div className="overflow-auto max-h-[800px]">
          <p>{content}</p>
        </div>
        <div className="mt-4 font-bold text-[20px] ">
          {tags.map((tag) => {
            return (
              <span
                key={id}
                className={
                  "me-2 rounded-full bg-slate-400 py-1 px-6" +
                  (MapColor[tag] || "bg-gray-500")
                }
              >
                {tag}{" "}
              </span>
            );
          })}
          <span></span>
        </div>
      </div>
    </div>
  );
}
