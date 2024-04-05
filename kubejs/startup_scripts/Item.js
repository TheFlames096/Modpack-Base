StartupEvents.registry('item', e => {
    let Coin = (
        Name
    ) => {
        e.create('coin_' + Name + '_1')
        e.create('coin_' + Name + '_10')
        e.create('coin_' + Name + '_100')
        e.create('coin_' + Name + '_1000')
        e.create('coin_' + Name + '_10000')
    }
    Coin('survivor')
    Coin('smith')
    Coin('chemist')
    Coin('nature')
    Coin('cooking')
    Coin('exploration')
    Coin('technique')
    Coin('wizard')

    e.create('advanced_coke_oven_brick')
    e.create('advanced_coke_oven_brick_dust')
    e.create('hot_netherrack_brick')
    e.create('infernal_brick')
    e.create('twilight_forest_portal_catalyst')
    e.create('cast_aluminium')
})
