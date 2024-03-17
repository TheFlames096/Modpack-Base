WorldgenEvents.remove(event => {
    event.removeOres(ore => {
        ore.blocks=/^(?!gtceu)/
    })
})