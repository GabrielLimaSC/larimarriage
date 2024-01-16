async function wait(miliseconds) {
    await new Promise(resolve => setTimeout(resolve, miliseconds))
}

export default async function Home() {
    await wait(3000)

    return (
        <main>
            <h1>Oi</h1>
        </main>
    )
}