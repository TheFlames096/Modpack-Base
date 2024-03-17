ServerEvents.recipes(event => {

    event.remove({ mod: "ironchest", not: { id: "ironchest:chests/vanilla_dirt_chest" } })
    event.remove({ mod: "ironshulkerbox"})
    event.remove({ mod: "metalbarrels"})
    event.remove({ output: "#forge:chests/wooden" })

    event.recipes.gtceu.bender("obsidian_plate_to_dense").circuit(9).EUt(120).duration(3600).itemInputs("9x #forge:plates/obsidian").itemOutputs("gtceu:dense_obsidian_plate")

    event.recipes.minecraft.crafting_shaped("minecraft:chest", ['WPW', 'PFP', 'WPW'], {
        P: "#minecraft:planks",
        W: "#minecraft:logs",
        F: "minecraft:flint"
    })

    let trapped = (
        input, output
    ) => {
        event.recipes.minecraft.crafting_shaped(output, [' T ', 'SCS', ' D '], {
            T: "minecraft:tripwire_hook",
            S: "#forge:screws/iron",
            D: "#forge:tools/screwdrivers",
            C: input
        })
        event.recipes.gtceu.assembler(output+'_hook').EUt(4).duration(200).itemInputs([input, "minecraft:tripwire_hook"]).itemOutputs(output)
    }

    let chest = (
        mat, Plate, upgrademat
    ) => {
        let screw = mat
        let Chest = "minecraft:chest"
        let Barrel = "minecraft:barrel"
        let TrappedChest = "minecraft:trapped_chest"
        if (mat == "crystal" || mat == "obsidian") {
            screw = "diamond"
            Chest ="ironchest:diamond_chest"
            Barrel = "metalbarrels:diamond_barrel"
            TrappedChest ="ironchest:trapped_diamond_chest"
        }
        event.recipes.minecraft.crafting_shaped("ironchest:" + mat + "_chest", ['SPS', 'PCP', 'hPs'], {
            S: "#forge:screws/" + screw,
            P: Plate,
            C: Chest,
            h: "#forge:tools/hammers",
            s: "#forge:tools/screwdrivers"
        })
        event.recipes.minecraft.crafting_shaped("metalbarrels:" + mat + "_barrel", ['hPs', 'PCP', 'SPS'], {
            S: "#forge:screws/" + screw,
            P: Plate,
            C: Barrel,
            h: "#forge:tools/hammers",
            s: "#forge:tools/screwdrivers"
        })
        event.recipes.minecraft.crafting_shaped("ironchest:trapped_" + mat + "_chest", ['SPS', 'PCP', 'hPs'], {
            S: "#forge:screws/" + screw,
            P: Plate,
            C: TrappedChest,
            h: "#forge:tools/hammers",
            s: "#forge:tools/screwdrivers"
        })
        event.recipes.minecraft.crafting_shaped("ironchest:"+upgrademat+'_to_' + mat + "_chest_upgrade", ['SPS', 'PCP', 'hPs'], {
            S: "#forge:screws/" + screw,
            P: Plate,
            C: upgrademat=="wood"?"#minecraft:planks":"#forge:plates/"+upgrademat,
            h: "#forge:tools/hammers",
            s: "#forge:tools/screwdrivers"
        })
        event.recipes.minecraft.crafting_shaped("metalbarrels:"+upgrademat+'_to_' + mat, ['hPs', 'PCP', 'SPS'], {
            S: "#forge:screws/" + screw,
            P: Plate,
            C: upgrademat=="wood"?"#minecraft:planks":"#forge:plates/"+upgrademat,
            h: "#forge:tools/hammers",
            s: "#forge:tools/screwdrivers"
        })
        // shulkerboxs
        if(upgrademat == "wood")
        upgrademat = "vanilla"
        event.recipes.minecraft.crafting_shaped("ironshulkerbox:"+upgrademat+'_to_' + mat + "_shulker_box_upgrade", ['SPS', 'PCP', 'hPs'], {
            S: "#forge:screws/" + screw,
            P: Plate,
            C: "minecraft:shulker_shell",
            h: "#forge:tools/hammers",
            s: "#forge:tools/screwdrivers"
        })
    }
    event.recipes.minecraft.crafting_shaped("ironchest:copper_to_iron_chest_upgrade", ['SPS', 'PCP', 'hPs'], {
        S: "#forge:screws/iron",
        P: "#forge:plates/iron",
        C: "#forge:plates/copper",
        h: "#forge:tools/hammers",
        s: "#forge:tools/screwdrivers"
    })
    event.recipes.minecraft.crafting_shaped("metalbarrels:copper_to_iron", ['hPs', 'PCP', 'SPSz'], {
        S: "#forge:screws/iron",
        P: "#forge:plates/iron",
        C: "#forge:plates/copper",
        h: "#forge:tools/hammers",
        s: "#forge:tools/screwdrivers"
    })
    event.recipes.minecraft.crafting_shaped("ironshulkerbox:copper_to_iron_shulker_box_upgrade", ['SPS', 'PCP', 'hPs'], {
        S: "#forge:screws/iron",
        P: "#forge:plates/iron",
        C: "minecraft:shulker_shell",
        h: "#forge:tools/hammers",
        s: "#forge:tools/screwdrivers"
    })
    
    event.recipes.minecraft.crafting_shaped("metalbarrels:netherite_barrel", ['hPs', 'PCP', 'SPS'], {
        S: "#forge:screws/diamond",
        P: "minecraft:netherite_ingot",
        C: "metalbarrels:obsidian_barrel",
        h: "#forge:tools/hammers",
        s: "#forge:tools/screwdrivers"
    })
    event.recipes.minecraft.crafting_shaped("metalbarrels:obsidian_to_netherite", ['hPs', 'PCP', 'SPS'], {
        S: "#forge:screws/diamond",
        P: "minecraft:netherite_ingot",
        C: "#forge:dense_plates/obsidian",
        h: "#forge:tools/hammers",
        s: "#forge:tools/screwdrivers"
    })

    event.recipes.minecraft.crafting_shaped("metalbarrels:silver_barrel", ['hPs', 'PCP', 'SPS'], {
        S: "#forge:screws/silver",
        P: "#forge:plates/silver",
        C: "minecraft:barrel",
        h: "#forge:tools/hammers",
        s: "#forge:tools/screwdrivers"
    })
    event.recipes.minecraft.crafting_shaped("metalbarrels:copper_to_silver", ['hPs', 'PCP', 'SPS'], {
        S: "#forge:screws/silver",
        P: "#forge:plates/silver",
        C: "#forge:plates/copper",
        h: "#forge:tools/hammers",
        s: "#forge:tools/screwdrivers"
    })
    event.recipes.minecraft.crafting_shaped("metalbarrels:silver_to_diamond", ['hPs', 'PCP', 'SPS'], {
        S: "#forge:screws/diamond",
        P: "#forge:plates/diamond",
        C: "#forge:plates/silver",
        h: "#forge:tools/hammers",
        s: "#forge:tools/screwdrivers"
    })

    trapped("minecraft:chest", "minecraft:trapped_chest")
    trapped("ironchest:dirt_chest", "ironchest:trapped_dirt_chest")
    trapped("ironchest:iron_chest", "ironchest:trapped_iron_chest")
    trapped("ironchest:copper_chest", "ironchest:trapped_copper_chest")
    trapped("ironchest:gold_chest", "ironchest:trapped_gold_chest")
    trapped("ironchest:diamond_chest", "ironchest:trapped_diamond_chest")
    trapped("ironchest:obsidian_chest", "ironchest:trapped_obsidian_chest")
    trapped("ironchest:crystal_chest", "ironchest:trapped_crystal_chest")
    chest("copper", "#forge:double_plates/copper",'wood')
    chest("iron", "#forge:double_plates/iron",'wood')
    chest("gold", "#forge:double_plates/gold",'iron')
    chest("diamond", "#forge:plates/diamond",'gold')
    chest("obsidian", "#forge:dense_plates/obsidian",'diamond')
    chest("crystal", "#forge:plates/glass",'diamond')

    event.recipes.gtceu.assembler("ironchest:copper_chest").EUt(7).duration(100).itemInputs(["3x #forge:double_plates/copper","minecraft:chest"]).itemOutputs("ironchest:copper_chest")
    event.recipes.gtceu.assembler("ironchest:trapped_copper_chest").EUt(7).duration(100).itemInputs(["3x #forge:double_plates/copper","minecraft:trapped_chest"]).itemOutputs("ironchest:trapped_copper_chest")
    event.recipes.gtceu.assembler("ironchest:iron_chest").EUt(16).duration(150).itemInputs(["3x #forge:double_plates/iron","minecraft:chest"]).itemOutputs("ironchest:iron_chest")
    event.recipes.gtceu.assembler("ironchest:trapped_iron_chest").EUt(16).duration(150).itemInputs(["3x #forge:double_plates/iron","minecraft:trapped_chest"]).itemOutputs("ironchest:trapped_iron_chest")
    event.recipes.gtceu.assembler("ironchest:gold_chest").EUt(64).duration(250).itemInputs(["3x #forge:double_plates/gold","minecraft:chest"]).itemOutputs("ironchest:gold_chest")
    event.recipes.gtceu.assembler("ironchest:trapped_gold_chest").EUt(64).duration(250).itemInputs(["3x #forge:double_plates/gold","minecraft:trapped_chest"]).itemOutputs("ironchest:trapped_gold_chest")
    event.recipes.gtceu.assembler("ironchest:diamond_chest").EUt(120).duration(300).itemInputs(["3x #forge:plates/diamond","minecraft:chest"]).itemOutputs("ironchest:diamond_chest")
    event.recipes.gtceu.assembler("ironchest:trapped_diamond_chest").EUt(120).duration(300).itemInputs(["3x #forge:plates/diamond","minecraft:trapped_chest"]).itemOutputs("ironchest:trapped_diamond_chest")

    event.recipes.gtceu.assembler("ironchest:obsidian_chest").EUt(256).duration(400).itemInputs(["3x #forge:dense_plates/obsidian","ironchest:diamond_chest"]).itemOutputs("ironchest:obsidian_chest")
    event.recipes.gtceu.assembler("ironchest:trapped_obsidian_chest").EUt(256).duration(400).itemInputs(["3x #forge:dense_plates/obsidian","ironchest:trapped_diamond_chest"]).itemOutputs("ironchest:trapped_obsidian_chest")
    event.recipes.gtceu.assembler("ironchest:crystal_chest").EUt(256).duration(400).itemInputs(["3x #forge:plates/glass","ironchest:diamond_chest"]).itemOutputs("ironchest:crystal_chest")
    event.recipes.gtceu.assembler("ironchest:trapped_crystal_chest").EUt(256).duration(400).itemInputs(["3x #forge:plates/glass","ironchest:trapped_diamond_chest"]).itemOutputs("ironchest:trapped_crystal_chest")

    event.recipes.gtceu.assembler("metalbarrels:copper_barrel").EUt(16).duration(200).itemInputs(["minecraft:barrel","3x #forge:double_plates/copper"]).itemOutputs("metalbarrels:copper_barrel")
    event.recipes.gtceu.assembler("metalbarrels:iron_barrel").EUt(30).duration(300).itemInputs(["minecraft:barrel","3x #forge:double_plates/iron"]).itemOutputs("metalbarrels:iron_barrel")
    event.recipes.gtceu.assembler("metalbarrels:silver_barrel").EUt(64).duration(400).itemInputs(["minecraft:barrel","3x #forge:double_plates/silver"]).itemOutputs("metalbarrels:silver_barrel")
    event.recipes.gtceu.assembler("metalbarrels:gold_barrel").EUt(64).duration(500).itemInputs(["minecraft:barrel","3x #forge:plates/gold"]).itemOutputs("metalbarrels:gold_barrel")
    event.recipes.gtceu.assembler("metalbarrels:diamond_barrel").EUt(120).duration(600).itemInputs(["minecraft:barrel","2x #forge:plates/diamond"]).itemOutputs("metalbarrels:diamond_barrel")
    event.recipes.gtceu.assembler("metalbarrels:obsidian_barrel").EUt(256).duration(700).itemInputs(["metalbarrels:diamond_barrel","2x #forge:dense_plates/obsidian"]).itemOutputs("metalbarrels:obsidian_barrel")
    event.recipes.gtceu.assembler("metalbarrels:crystal_barrel").EUt(256).duration(700).itemInputs(["metalbarrels:diamond_barrel","4x #forge:plates/glass"]).itemOutputs("metalbarrels:crystal_barrel")
    event.recipes.gtceu.assembler("metalbarrels:netherite_barrel").EUt(480).duration(800).itemInputs(["metalbarrels:obsidian_barrel","netherite_ingot"]).itemOutputs("metalbarrels:netherite_barrel")

    // Upgrades
    event.recipes.gtceu.assembler("ironchest:wood_to_copper_chest_upgrade").circuit(10).EUt(16).duration(200).itemInputs(["#minecraft:planks","3x #forge:double_plates/copper"]).itemOutputs("ironchest:wood_to_copper_chest_upgrade")
    event.recipes.gtceu.assembler("ironchest:wood_to_iron_chest_upgrade").circuit(10).EUt(30).duration(300).itemInputs(["#minecraft:planks","3x #forge:double_plates/iron"]).itemOutputs("ironchest:wood_to_iron_chest_upgrade")
    event.recipes.gtceu.assembler("ironchest:copper_to_iron_chest_upgrade").circuit(10).EUt(30).duration(300).itemInputs(["#forge:plates/copper","3x #forge:plates/iron"]).itemOutputs("ironchest:copper_to_iron_chest_upgrade")
    event.recipes.gtceu.assembler("ironchest:iron_to_gold_chest_upgrade").circuit(10).EUt(64).duration(500).itemInputs(["#forge:plates/iron","3x #forge:plates/gold"]).itemOutputs("ironchest:iron_to_gold_chest_upgrade")
    event.recipes.gtceu.assembler("ironchest:gold_to_diamond_chest_upgrade").circuit(10).EUt(120).duration(600).itemInputs(["#forge:plates/gold","2x #forge:plates/diamond"]).itemOutputs("ironchest:gold_to_diamond_chest_upgrade")
    event.recipes.gtceu.assembler("ironchest:diamond_to_obsidian_chest_upgrade").circuit(10).EUt(256).duration(700).itemInputs(["#forge:plates/diamond","2x #forge:dense_plates/obsidian"]).itemOutputs("ironchest:diamond_to_obsidian_chest_upgrade")
    event.recipes.gtceu.assembler("ironchest:diamond_to_crystal_chest_upgrade").circuit(10).EUt(256).duration(700).itemInputs(["#forge:plates/diamond","4x #forge:plates/glass"]).itemOutputs("ironchest:diamond_to_crystal_chest_upgrade")

    event.recipes.gtceu.assembler("metalbarrels:wood_to_copper").circuit(11).EUt(16).duration(200).itemInputs(["#minecraft:planks","3x #forge:double_plates/copper"]).itemOutputs("metalbarrels:wood_to_copper")
    event.recipes.gtceu.assembler("metalbarrels:wood_to_iron").circuit(11).EUt(30).duration(300).itemInputs(["#minecraft:planks","3x #forge:double_plates/iron"]).itemOutputs("metalbarrels:wood_to_iron")
    event.recipes.gtceu.assembler("metalbarrels:copper_to_iron").circuit(11).EUt(30).duration(300).itemInputs(["#forge:plates/copper","3x #forge:plates/iron"]).itemOutputs("metalbarrels:copper_to_iron")
    event.recipes.gtceu.assembler("metalbarrels:copper_to_silver").circuit(11).EUt(64).duration(400).itemInputs(["#forge:plates/copper","3x #forge:double_plates/silver"]).itemOutputs("metalbarrels:copper_to_silver")
    event.recipes.gtceu.assembler("metalbarrels:iron_to_gold").circuit(11).EUt(64).duration(500).itemInputs(["#forge:plates/iron","3x #forge:plates/gold"]).itemOutputs("metalbarrels:iron_to_gold")
    event.recipes.gtceu.assembler("metalbarrels:gold_to_diamond").circuit(11).EUt(120).duration(600).itemInputs(["#forge:plates/gold","2x #forge:plates/diamond"]).itemOutputs("metalbarrels:gold_to_diamond")
    event.recipes.gtceu.assembler("metalbarrels:silver_to_diamond").circuit(11).EUt(120).duration(600).itemInputs(["#forge:plates/silver","2x #forge:plates/diamond"]).itemOutputs("metalbarrels:silver_to_diamond")
    event.recipes.gtceu.assembler("metalbarrels:diamond_to_obsidian").circuit(11).EUt(256).duration(700).itemInputs(["#forge:plates/diamond","2x #forge:dense_plates/obsidian"]).itemOutputs("metalbarrels:diamond_to_obsidian")
    event.recipes.gtceu.assembler("metalbarrels:diamond_to_crystal").circuit(11).EUt(256).duration(700).itemInputs(["#forge:plates/diamond","4x #forge:plates/glass"]).itemOutputs("metalbarrels:diamond_to_crystal")
    event.recipes.gtceu.assembler("metalbarrels:obsidian_to_netherite").circuit(11).EUt(480).duration(800).itemInputs(["#forge:dense_plates/obsidian","netherite_ingot"]).itemOutputs("metalbarrels:obsidian_to_netherite")

    event.recipes.gtceu.assembler("ironshulkerbox:vanilla_to_copper_shulker_box_upgrade").EUt(16).duration(200).itemInputs(["minecraft:shulker_shell","3x #forge:double_plates/copper"]).itemOutputs("ironshulkerbox:vanilla_to_copper_shulker_box_upgrade")
    event.recipes.gtceu.assembler("ironshulkerbox:vanilla_to_iron_shulker_box_upgrade").EUt(30).duration(300).itemInputs(["minecraft:shulker_shell","3x #forge:double_plates/iron"]).itemOutputs("ironshulkerbox:vanilla_to_iron_shulker_box_upgrade")
    event.recipes.gtceu.assembler("ironshulkerbox:copper_to_iron_shulker_box_upgrade").EUt(30).duration(300).itemInputs(["minecraft:shulker_shell","3x #forge:plates/iron"]).itemOutputs("ironshulkerbox:copper_to_iron_shulker_box_upgrade")
    event.recipes.gtceu.assembler("ironshulkerbox:iron_to_gold_shulker_box_upgrade").EUt(64).duration(500).itemInputs(["minecraft:shulker_shell","3x #forge:plates/gold"]).itemOutputs("ironshulkerbox:iron_to_gold_shulker_box_upgrade")
    event.recipes.gtceu.assembler("ironshulkerbox:gold_to_diamond_shulker_box_upgrade").EUt(120).duration(600).itemInputs(["minecraft:shulker_shell","2x #forge:plates/diamond"]).itemOutputs("ironshulkerbox:gold_to_diamond_shulker_box_upgrade")
    event.recipes.gtceu.assembler("ironshulkerbox:diamond_to_obsidian_shulker_box_upgrade").EUt(256).duration(700).itemInputs(["minecraft:shulker_shell","2x #forge:dense_plates/obsidian"]).itemOutputs("ironshulkerbox:diamond_to_obsidian_shulker_box_upgrade")
    event.recipes.gtceu.assembler("ironshulkerbox:diamond_to_crystal_shulker_box_upgrade").EUt(256).duration(700).itemInputs(["minecraft:shulker_shell","4x #forge:plates/glass"]).itemOutputs("ironshulkerbox:diamond_to_crystal_shulker_box_upgrade")
})