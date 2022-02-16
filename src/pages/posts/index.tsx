import Head from 'next/head'
import styles from './styles.module.scss'

export  default function Posts(){
    return(
        <>
        <Head>
            <title>Posts | ig.news</title>
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                <a href="#">
                    <time> 12 de october de 2022 </time>
                    <strong> Creating a Monorepo with Lena & Yarn Workpaces</strong>
                    <p> In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, tests, and release process</p>
                </a>
                <a href="#">
                    <time> 12 de october de 2022 </time>
                    <strong> Creating a Monorepo with Lena & Yarn Workpaces</strong>
                    <p> In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, tests, and release process</p>
                </a>
                <a href="#">
                    <time> 12 de october de 2022 </time>
                    <strong> Creating a Monorepo with Lena & Yarn Workpaces</strong>
                    <p> In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, tests, and release process</p>
                </a>
            </div>
        </main>
        </>
    )
}