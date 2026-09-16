import Link from "next/link";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body>
        <header>
          <Link href={"/"}>イベント一覧</Link>  
          {" | "}
          <Link href={"/flagPage"}>フラグ一覧</Link>
        </header>


        {children}


        </body>
    </html>
  );
}
