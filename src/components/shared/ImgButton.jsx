function ImgButton({ style, content, Img, istyle, alt }) {
  return (
    <button
      className={`rounded-full text-white font-spaceGrotesk border flex flex-row gap-2 justify-center items-center ${style}`}>
      <img className={istyle} src={Img} alt={alt}></img>
      {content}
    </button>
  );
}

export default ImgButton;
