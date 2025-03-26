import Image from "next/image";

export default function Home() {
  return (
      <main className="">
        Это обычный текст без стиля
        <h2 className="text-airbnb">Этот цвет здесь, потому что автопрефиксер работает</h2>
      </main>
  );
}
