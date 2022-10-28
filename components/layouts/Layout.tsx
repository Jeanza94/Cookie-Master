import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { NavBar } from "../ui"


export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Head>

            </Head>

            <nav>
                <NavBar />
            </nav>

            <main style={{ padding: '20px 50px' }}>
                {children}
            </main>
        </>
    )
}
