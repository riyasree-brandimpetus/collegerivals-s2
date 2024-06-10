import Link from 'next/link';

export default function NotFound() {

  return (
    <>
      <div
        className="flex flex-col ppFormula-font h-screen w-screen justify-center items-center"
        color="#333333"
      >
        <h1 className="text-4xl italic">404</h1>
        <p className="text-2xl">Page Not Found</p>
        <Link className="helvetica-font" href="/">
          Return Home
        </Link>
      </div>
    </>
  );
}
