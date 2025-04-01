export default function H2Tittle({ title }: { title: string }) {
  return (
    <h2 className="font-montserrat font-extrabold text-2xl lg:text-4xl text-center text-dark-blue">
      {title}
    </h2>
  );
}
