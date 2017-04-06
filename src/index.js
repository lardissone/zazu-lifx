module.exports = (pluginContext) => {
  return (name, env = {}) => {
    return new Promise((resolve, reject) => {
      resolve([
        {
          icon: 'fa-lightbulb-o',
          title: `LIFX Light action`,
          subtitle: 'Action executed',
        },
      ])
    })
  }
}
