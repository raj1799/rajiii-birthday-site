export default function HeartsBackground() {
  const hearts = new Array(25).fill(0);

  return (
    <div className="hearts-wrapper">
      {hearts.map((_, i) => {
        const randomLeft = Math.random() * 100; // % position
        const randomSize = Math.random() * 15 + 10; // 10px to 25px
        const randomDuration = Math.random() * 5 + 5; // 5s to 10s
        const randomDelay = Math.random() * 5; // 0s to 5s delay

        return (
          <div
            key={i}
            className="heart"
            style={{
              left: `${randomLeft}%`,
              width: randomSize,
              height: randomSize,
              animationDuration: `${randomDuration}s`,
              animationDelay: `${randomDelay}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
}
