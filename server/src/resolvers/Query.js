function link(parent, args, context, info) {
  return context.prisma.link({id: args.id})
}

function links(parent, args, context, info) {
  return context.prisma.links()
}

async function user(parent, args, context, info) {
  return context.prisma.user({ id: args.userId })
}

function users(parent, args, context, info) {
  return context.prisma.users()
}

module.exports = {
  links,
  link,
  users,
  user
}