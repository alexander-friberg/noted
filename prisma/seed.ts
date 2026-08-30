import { prisma } from "@/lib/prisma";

async function main() {
    const User1 = await prisma.user.create({
        data: {
            name: "dev",
            notes: {
                create: [
                    { title: "yoshiiii", content: "yesss" }, { title: "yosh", content: "nosh" }
                ]
            }

        }
    })

    console.log({ User1 });
}

main().then(async () => { await prisma.$disconnect() }).catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1) });
