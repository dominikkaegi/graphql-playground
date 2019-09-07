const { prisma } = require('./generated/prisma-client')

async function main() {
  const newLink = await prisma.createLink({
    url: 'www.prisma.io',
    description: 'Prisma replaces tradidional ORMs'
  })

  prisma.

  console.log(`Created new link: ${newLink.url} (ID: ${newLink.id})`)
}

main().catch(e => console.error(e))