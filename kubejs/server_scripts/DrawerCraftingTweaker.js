ServerEvents.recipes(event => {

    event.remove({mod:'storagedrawers'})
    event.remove({mod:"framedcompactdrawers"})

    let drawer_recipe = (
        item, nbt
    ) => {
        event.recipes.minecraft.crafting_shaped({ "nbt": nbt, "item": "framedcompactdrawers:framed_full_one", "type": "minecraft:item_nbt" }, ['CCC', 'CBC', 'CCC'], {
            C: item,
            B: "minecraft:chest"
        })
        event.recipes.minecraft.crafting_shaped({ "nbt": nbt, "item": "framedcompactdrawers:framed_full_two", "type": "minecraft:item_nbt" }, ['CBC', 'CCC', 'CBC'], {
            C: item,
            B: "minecraft:chest"
        })
        event.recipes.minecraft.crafting_shaped({ "nbt": nbt, "item": "framedcompactdrawers:framed_full_four", "type": "minecraft:item_nbt" }, ['BCB', 'CCC', 'BCB'], {
            C: item,
            B: "minecraft:chest"
        })
        event.recipes.minecraft.crafting_shaped({ "count": 2, "nbt": nbt, "item": "framedcompactdrawers:framed_half_one", "type": "minecraft:item_nbt" }, ['CCC', ' B ', 'CCC'], {
            C: item,
            B: "minecraft:chest"
        })
        event.recipes.minecraft.crafting_shaped({ "count": 2, "nbt": nbt, "item": "framedcompactdrawers:framed_half_two", "type": "minecraft:item_nbt" }, ['CCC', 'BCB', 'CCC'], {
            C: item,
            B: "minecraft:chest"
        })
        event.recipes.minecraft.crafting_shaped({ "count": 2, "nbt": nbt, "item": "framedcompactdrawers:framed_half_four", "type": "minecraft:item_nbt" }, ['CBC', 'BCB', 'CBC'], {
            C: item,
            B: "minecraft:chest"
        })

    }

    Ingredient.of("#minecraft:wooden_slabs").getItemIds().forEach(item => {
        let mat = item.slice(0, -5)
        if (mat == "minecraft:bamboo") {
            drawer_recipe(item, "{MatF:{Count:1,id:'minecraft:air'},MatS:{Count:1,id:'stripped_bamboo_block'},MatT:{Count:1,id:'bamboo_block'}}")
        }
        else if (mat == "minecraft:crimson") {
            drawer_recipe(item, "{MatF:{Count:1,id:'minecraft:air'},MatS:{Count:1,id:'stripped_crimson_hyphae'},MatT:{Count:1,id:'crimson_hyphae'}}")
        }
        else if (mat == "minecraft:warped") {
            drawer_recipe(item, "{MatF:{Count:1,id:'minecraft:air'},MatS:{Count:1,id:'stripped_warped_hyphae'},MatT:{Count:1,id:'warped_hyphae'}}")
        }
        else if (mat == "ad_astra:aeronos") {
            drawer_recipe(item, "{MatF:{Count:1,id:'minecraft:air'},MatS:{Count:1,id:'ad_astra:aeronos_stem'},MatT:{Count:1,id:'ad_astra:aeronos_planks'}}")
        }
        else if (mat == "ad_astra:strophar") {
            drawer_recipe(item, "{MatF:{Count:1,id:'minecraft:air'},MatS:{Count:1,id:'ad_astra:strophar_stem'},MatT:{Count:1,id:'ad_astra:strophar_planks'}}")
        }
        else if (mat == "ad_astra:glacian") {
            drawer_recipe(item, "{MatF:{Count:1,id:'minecraft:air'},MatS:{Count:1,id:'ad_astra:stripped_glacian_log'},MatT:{Count:1,id:'ad_astra:glacian_fur'}}")
        }
        else if (mat == "botania:livingwood_planks") {
            drawer_recipe(item, "{MatF:{Count:1,id:'minecraft:air'},MatS:{Count:1,id:'botania:stripped_livingwood'},MatT:{Count:1,id:'botania:livingwood'}}")
        }
        else if (mat == "botania:dreamwood_planks") {
            drawer_recipe(item, "{MatF:{Count:1,id:'minecraft:air'},MatS:{Count:1,id:'botania:stripped_dreamwood'},MatT:{Count:1,id:'botania:dreamwood'}}")
        }
        else if (mat == "botania:shimmerwood_planks") {
            drawer_recipe(item, "{MatF:{Count:1,id:'minecraft:air'},MatS:{Count:1,id:'botania:shimmerwood_planks'},MatT:{Count:1,id:'botania:shimmerrock'}}")
        }
        else if (mat.indexOf('_') == -1 && mat != "botania:livingwood" && mat != "botania:dreamwood")
            drawer_recipe(item, "{MatF:{Count:1,id:'minecraft:air'},MatS:{Count:1,id:'" + mat.split(':').slice(0, 1).join(':') + ':' + "stripped_" + mat.split(':').slice(1).join(':') + "_wood'},MatT:{Count:1,id:'" + mat + "_wood'}}")
    })

    //Drawer Upgrade
    event.recipes.minecraft.crafting_shaped("storagedrawers:upgrade_template",['SPS','SDS',' s '],{
        S:"#forge:screws/steel",
        P:"minecraft:piston",
        D:"framedcompactdrawers:framed_full_one",
        s:"#forge:tools/screwdrivers"
    })
    event.recipes.gtceu.assembler("storagedrawers:upgrade_template").EUt(16).duration(1200).itemInputs(["minecraft:piston","framedcompactdrawers:framed_full_one"]).itemOutputs("storagedrawers:upgrade_template")

    
    event.recipes.minecraft.crafting_shaped("storagedrawers:iron_storage_upgrade",['PSP','SpS','PRP'],{
        S:"storagedrawers:upgrade_template",
        P:"#forge:plates/iron",
        p:"#forge:plates/iron",
        R:"#forge:rods/iron"
    })
    event.recipes.minecraft.crafting_shaped("storagedrawers:gold_storage_upgrade",['PSP','SpS','PRP'],{
        S:"storagedrawers:upgrade_template",
        P:"#forge:plates/gold",
        p:"#forge:plates/bronze",
        R:"#forge:rods/gold"
    })
    event.recipes.minecraft.crafting_shaped("storagedrawers:obsidian_storage_upgrade",['PSP','SpS','PRP'],{
        S:"storagedrawers:upgrade_template",
        P:"#forge:plates/obsidian",
        p:"#forge:plates/steel",
        R:"#forge:rods/steel"
    })
    event.recipes.minecraft.crafting_shaped("storagedrawers:diamond_storage_upgrade",['PSP','SpS','PRP'],{
        S:"storagedrawers:upgrade_template",
        P:"#forge:plates/diamond",
        p:"#forge:plates/aluminium",
        R:"#forge:rods/diamond"
    })
    event.recipes.minecraft.crafting_shaped("storagedrawers:emerald_storage_upgrade",['PSP','SpS','PRP'],{
        S:"storagedrawers:upgrade_template",
        P:"#forge:plates/emerald",
        p:"#forge:plates/tantalum",
        R:"#forge:rods/emerald"
    })
    event.recipes.minecraft.crafting_shaped("storagedrawers:ruby_storage_upgrade",['PSP','SpS','PRP'],{
        S:"storagedrawers:upgrade_template",
        P:"#forge:plates/ruby",
        p:"#forge:plates/stainless_steel",
        R:"#forge:rods/ruby"
    })
    event.recipes.minecraft.crafting_shaped("storagedrawers:tanzanite_storage_upgrade",['PSP','SpS','PRP'],{
        S:"storagedrawers:upgrade_template",
        P:"#forge:plates/lazurite",
        p:"#forge:plates/titanium",
        R:"#forge:rods/lazurite"
    })
    event.recipes.minecraft.crafting_shaped("storagedrawers:one_stack_upgrade",['PSP','SpS','PRP'],{
        S:"storagedrawers:upgrade_template",
        P:"#forge:plates/rubber",
        p:"#minecraft:soul_fire_base_blocks",
        R:"#forge:rods/rubber"
    })
    event.recipes.minecraft.crafting_shaped("storagedrawers:illumination_upgrade",['IRI','RTR','DDD'],{
        R:"#forge:rods/wood",
        T:"storagedrawers:upgrade_template",
        D:"#forge:dusts/glowstone",
        I:"minecraft:glow_ink_sac"
    })
    event.recipes.minecraft.crafting_shaped("storagedrawers:void_upgrade",['RDR','PTP','RDR'],{
        R:"#forge:rods/wood",
        T:"storagedrawers:upgrade_template",
        D:"#forge:dusts/redstone",
        P:"#forge:plates/obsidian"
    })
    event.recipes.minecraft.crafting_shaped("storagedrawers:fill_level_upgrade",['CRC','RTR','PRP'],{
        T:"storagedrawers:upgrade_template",
        R:"#forge:dusts/redstone",
        P:"#forge:plates/redstone",
        C:"minecraft:comparator"
    })
    event.recipes.minecraft.crafting_shaped("storagedrawers:redstone_upgrade",['RSR','STS','RDR'],{
        R:"#forge:plates/redstone",
        T:"storagedrawers:upgrade_template",
        S:"#forge:rods/wood",
        D:"#forge:dusts/redstone"
    })
    event.recipes.minecraft.crafting_shaped("storagedrawers:max_redstone_upgrade",['RRR','STS','SDS'],{
        R:"#forge:plates/redstone",
        T:"storagedrawers:upgrade_template",
        S:"#forge:rods/wood",
        D:"#forge:dusts/redstone"
    })
    event.recipes.minecraft.crafting_shaped("storagedrawers:min_redstone_upgrade",['SDS','STS','RRR'],{
        R:"#forge:plates/redstone",
        T:"storagedrawers:upgrade_template",
        S:"#forge:rods/wood",
        D:"#forge:dusts/redstone"
    })

    //Keys
    event.recipes.minecraft.crafting_shaped("storagedrawers:drawer_key",[' BP','TPR','Gs '],{
        P:"#forge:plates/steel",
        T:"storagedrawers:upgrade_template",
        S:"#forge:tools/saws",
        G:"#forge:plates/gold",
        B:"#forge:bolts/gold",
        R:"#forge:rods/gold",
    })
    event.recipes.gtceu.assembler("storagedrawers:shroud_key").EUt(30).duration(100).itemInputs(["storagedrawers:drawer_key","minecraft:ender_eye"]).itemOutputs("storagedrawers:shroud_key")
    event.recipes.gtceu.assembler("storagedrawers:quantify_key").EUt(30).duration(100).itemInputs(["storagedrawers:drawer_key","minecraft:name_tag"]).itemOutputs("storagedrawers:quantify_key")
})