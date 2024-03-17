ServerEvents.recipes(event => {
    let Remove_ID = [
        "minecraft:wooden_pickaxe",
        "minecraft:iron_pickaxe",
        "minecraft:stone_pickaxe",
        "minecraft:golden_pickaxe",
        "minecraft:diamond_pickaxe",

        "minecraft:charcoal",
        "minecraft:melon_seeds",
        "minecraft:pumpkin_seeds",

        "minecraft:furnace",
        "nethersdelight:blackstone_furnace",
        "botania:mana_infusion/poppy_to_blue_orchid",
        "gtceu:shaped/plank_to_wooden_shape",
        "gtceu:cutter/cut_glass_block_to_plate",
        "gtceu:cutter/cut_glass_block_to_plate_distilled_water",
        "gtceu:cutter/cut_glass_block_to_plate_water",
        "minecraft:brick",
        "minecraft:bricks"
    ]
    let Color = [
        "red",
        "blue",
        "cyan",
        "gray",
        "lime",
        "pink",
        "black",
        "green",
        "brown",
        "white",
        "orange",
        "purple",
        "yellow",
        'magenta',
        'light_blue',
        'light_gray'
    ]
    Remove_ID.forEach(ID => {
        event.remove({ id: ID })
    });

    event.custom({ "type": "botania:mana_infusion", "catalyst": { "type": "block", "block": "botania:alchemy_catalyst" }, "group": "botania:flower_cycle", "input": { "item": "minecraft:poppy" }, "mana": 400, "output": { "item": "iguanatweaksreborn:cyan_flower" } })
    event.custom({ "type": "botania:mana_infusion", "catalyst": { "type": "block", "block": "botania:alchemy_catalyst" }, "group": "botania:flower_cycle", "input": { "item": "iguanatweaksreborn:cyan_flower" }, "mana": 400, "output": { "item": "minecraft:blue_orchid" } })


    event.remove({ id: "solapplepie:lunchbag" })
    event.remove({ id: "solapplepie:lunchbox" })
    event.remove({ id: "solapplepie:golden_lunchbox" })
    event.remove({ id: "minecraft:blast_furnace" })
    event.remove({ id: "minecraft:nether_bricks" })
    event.remove({ id: "minecraft:anvil" })
    event.remove({ id: "gtceu:compressor/compress_plate_dust_wood_" })
    event.remove({ id: "gtceu:compressor/compress_plate_dust_treated_wood_" })
    event.remove({ id: "ceramicbucket:unfired_clay_bucket" })
    event.remove({ output: "#railcraft:strengthened_glass" })
    event.remove({ output: "#minecraft:beds" })
    event.remove({ output: "minecraft:piston" })
    event.remove({ type: "minecraft:crafting_shaped", output: "#minecraft:slabs" })
    event.remove({ type: "minecraft:crafting_shaped", output: "#minecraft:doors" })
    event.remove({ type: "minecraft:crafting_shaped", output: "#minecraft:trapdoors" })
    Color.forEach(color =>{
        event.recipes.minecraft.crafting_shaped("minecraft:"+color+"_bed", ['CCC', 'PPP', 'FSF'], {
            C: "minecraft:"+color+"_carpet",
            P: "#minecraft:planks",
            F: "#minecraft:fences",
            S: "#forge:tools/mallets"
        })
        event.recipes.minecraft.crafting_shapeless("minecraft:"+color+"_bed",["#minecraft:beds",color+'_dye'])
        event.recipes.gtceu.chemical_bath(color+'_strengthen_glass_dyed').EUt(30).duration(10).itemInputs("#railcraft:strengthened_glass").inputFluids(Fluid.of("gtceu:"+color+"_dye",36)).itemOutputs("railcraft:"+color+"_strengthened_glass")
    }
    )
    event.replaceInput([{ id: "gtceu:shaped/steam_boiler_lava_bronze" }, { id: "gtceu:shaped/steam_boiler_lava_steel" }], "minecraft:glass", "fluidtank:tank_wood")
    event.recipes.gtceu.compressor("gtceu:compressor/compress_plate_dust_wood_").EUt(2).duration(200).itemInputs("8x #forge:dusts/wood").itemOutputs("gtceu:wood_plate")
    event.recipes.gtceu.compressor("gtceu:compressor/compress_plate_dust_treated_wood_").EUt(2).duration(200).itemInputs("8x #forge:dusts/treated_wood").itemOutputs("gtceu:treated_wood_plate")
    event.recipes.minecraft.crafting_shaped("minecraft:piston", ['FFF', 'GRG', 'SPS'], {
        F: "#forge:frames/wood",
        G: "#forge:small_gears/iron",
        R: "#minecraft:wooden_fences",
        S: "#forge:cobblestone",
        P: "#forge:plates/red_alloy"
    })
    event.recipes.gtceu.chemical_reactor("railcraft:strengthened_glass").EUt(30).duration(50).itemInputs(["#forge:dusts/tin", "#forge:dusts/saltpeter"]).inputFluids(Fluid.of('gtceu:glass', 864)).itemOutputs("6x railcraft:white_strengthened_glass")
    event.recipes.gtceu.assembler("minecraft:piston").circuit(1).itemInputs(["#forge:cobblestone", "#forge:small_gears/iron", "#minecraft:wooden_fences", "6x gtceu:wood_plate"]).inputFluids(Fluid.of('gtceu:redstone', 72)).itemOutputs("minecraft:piston")
    event.recipes.minecraft.crafting_shaped("minecraft:anvil", ['BBB', 'SBS', 'PBP'], {
        B: "#forge:storage_blocks/iron",
        S: "#forge:screws/iron",
        P: "#forge:plates/iron",
    })

    event.recipes.minecraft.crafting_shapeless("4x minecraft:pumpkin_seeds", ["minecraft:pumpkin", "#forge:tools/mallets"])
    event.recipes.minecraft.crafting_shapeless("minecraft:melon_seeds", ["minecraft:melon_slice", "#forge:tools/mallets"])
    event.recipes.minecraft.crafting_shaped("solapplepie:lunchbag", ['P P', 'SPS'], {
        P: "minecraft:paper",
        S: "gtceu:sticky_resin"
    })
    event.recipes.minecraft.crafting_shaped("solapplepie:lunchbox", ['PsP', 'SPS'], {
        P: "#forge:double_plates/iron",
        S: "#forge:screws/iron",
        s: "#forge:tools/screwdrivers"
    })
    event.recipes.minecraft.crafting_shaped("solapplepie:golden_lunchbox", ['PsP', 'SLS'], {
        P: "#forge:double_plates/gold",
        S: "#forge:screws/gold",
        L: "solapplepie:lunchbox",
        s: "#forge:tools/screwdrivers"
    })

    

    let slabs = Ingredient.of('#minecraft:slabs').getItemIds()

    let wooden_trapdoors = Ingredient.of('#minecraft:wooden_trapdoors').getItemIds()

    let planks = Ingredient.of("#minecraft:planks").getItemIds()

    slabs.forEach(item => {
        if (planks.contains(item.slice(0, -5) + "_planks")) {
            event.recipes.minecraft.crafting_shapeless(item, [item.slice(0, -5) + "_planks", "#forge:tools/saws"])
        }
        else {
            event.recipes.minecraft.crafting_shapeless(item, [item.slice(0, -5), "#forge:tools/saws"])
            event.recipes.minecraft.crafting_shapeless(item, [item.slice(0, -5) + "_block", "#forge:tools/saws"])
        }
    });
    wooden_trapdoors.forEach(item => {

        let slab = item.slice(0, -9) + '_slab'
        let door = item.slice(0, -9) + '_door'

        event.recipes.minecraft.crafting_shaped(
            item,
            ['SPS', 'PAP', 'SPS'],
            {
                P: "#forge:rods/wood",
                S: slab,
                A: "#forge:gems/flint"
            }
        )
        event.recipes.minecraft.crafting_shaped(
            '2x ' + item,
            ['SPS', 'PAP', 'SPS'],
            {
                P: "#forge:rods/wood",
                S: slab,
                A: "#forge:screws/iron"
            }
        )
        event.recipes.minecraft.crafting_shaped(
            '4x ' + item,
            ['SPS', 'PAP', 'SPS'],
            {
                P: "#forge:rods/wood",
                S: slab,
                A: "#forge:screws/steel"
            }
        )
        event.recipes.minecraft.crafting_shaped(
            door,
            ['PDS', 'PRA', 'PPB'],
            {
                P: item.slice(0, -9) + '_planks',
                D: item,
                S: "#forge:tools/screwdrivers",
                R: "#forge:rings/wrought_iron",
                A: "#forge:screws/wrought_iron",
                B: "#forge:tools/saws"
            }
        )
        event.recipes.minecraft.crafting_shaped(
            door,
            ['PDS', 'PRA', 'PPB'],
            {
                P: item.slice(0, -9) + '_planks',
                D: item,
                S: "#forge:tools/screwdrivers",
                R: "#forge:rings/copper",
                A: "#forge:screws/copper",
                B: "#forge:tools/saws"
            }
        )
        event.recipes.gtceu.assembler(item + '_1').EUt(4).duration(600).inputFluids(Fluid.of("gtceu:steel", 16)).itemInputs("4x #forge:rods/wood").itemInputs('4x ' + slab).itemOutputs('6x ' + item)
        event.recipes.gtceu.assembler(item + '_2').EUt(4).duration(600).inputFluids(Fluid.of("gtceu:iron", 16)).itemInputs("4x #forge:rods/wood").itemInputs('4x ' + slab).itemOutputs('4x ' + item)
        event.recipes.gtceu.assembler(door + '_1').EUt(4).duration(600).inputFluids(Fluid.of("gtceu:iron", 16)).itemInputs("4x #forge:plates/wood").itemInputs(item).itemOutputs(door)
        event.recipes.gtceu.assembler(door + '_2').EUt(4).duration(600).inputFluids(Fluid.of("gtceu:copper", 16)).itemInputs("4x #forge:plates/wood").itemInputs(item).itemOutputs(door)
    })

    event.recipes.minecraft.crafting_shapeless("fruitfulfun:redlove_door", ["fruitfulfun:redlove_sliding_door"])
    event.recipes.minecraft.crafting_shapeless("fruitfulfun:redlove_sliding_door", ["fruitfulfun:redlove_door"])
    event.recipes.minecraft.crafting_shaped(
        "minecraft:iron_door",
        ['PDS', 'PRA', 'PPB'],
        {
            P: "#forge:plates/iron",
            D: "minecraft:iron_bars",
            S: "#forge:tools/screwdrivers",
            R: "#forge:rings/steel",
            A: "#forge:screws/steel",
            B: "#forge:tools/hammers"
        }
    )
    event.recipes.minecraft.crafting_shaped(
        "minecraft:iron_trapdoor",
        ['SPS', 'PDP', 'APB'],
        {
            P: "#forge:plates/iron",
            D: "#minecraft:wooden_trapdoors",
            S: "#forge:screws/iron",
            A: "#forge:tools/saws",
            B: "#forge:tools/screwdrivers"
        }
    )
    event.recipes.gtceu.assembler("minecraft:iron_door").EUt(7).duration(400).inputFluids(Fluid.of("gtceu:steel", 16)).itemInputs("4x #forge:plates/iron").itemInputs("minecraft:iron_bars").itemOutputs("iron_door")
    event.recipes.gtceu.assembler("minecraft:iron_trapdoor").EUt(16).duration(100).itemInputs("4x #forge:plates/iron").itemInputs("#minecraft:wooden_trapdoors").itemOutputs("iron_trapdoor")


    event.replaceInput({}, "minecraft:iron_pickaxe", "gtceu:iron_pickaxe")
    event.replaceInput({}, "minecraft:iron_pickaxe", "gtceu:iron_pickaxe")
    event.replaceInput({}, "primalmagick:rock_salt", "#forge:dusts/rock_salt")
    event.replaceInput({}, "minecraft:diamond_pickaxe", "gtceu:diamond_pickaxe")
    event.replaceInput({}, "minecraft:water_bucket", { "type": "bucketlib:fluid", "tag": "minecraft:water" })
    event.replaceInput([{ id: "gtceu:shaped/steam_boiler_coal_bronze" }, { id: "gtceu:shaped/steam_boiler_coal_steel" }], "minecraft:furnace", "minecraft:blast_furnace")

    
    event.recipes.minecraft.crafting_shaped("ceramicbucket:unfired_clay_bucket", ['C C', 'CCC'], {
        C: "#forge:dusts/clay"
    })

    event.recipes.minecraft.crafting_shapeless("minecraft:flint", ["minecraft:gravel", "minecraft:gravel", "minecraft:gravel"])
    event.recipes.minecraft.crafting_shapeless("delightful:cactus_flesh", ["minecraft:cactus"])

    event.recipes.minecraft.crafting_shaped("minecraft:water_bucket", ['CCC', 'CBC', 'CCC'], {
        C: "delightful:cactus_flesh",
        B: "minecraft:bucket"
    })
    event.recipes.minecraft.crafting_shaped({ "nbt": "{Fluid:{Amount:1000,FluidName:\"minecraft:water\"}}", "item": "ceramicbucket:ceramic_bucket", "type": "minecraft:item_nbt" }, ['CCC', 'CBC', 'CCC'], {
        C: "delightful:cactus_flesh",
        B: "ceramicbucket:ceramic_bucket"
    })

    event.recipes.minecraft.crafting_shapeless("gtceu:wood_dust", ["#minecraft:logs", "#forge:tools/mortars"])
    event.recipes.minecraft.crafting_shapeless("kubejs:unfired_clay_brick", ["minecraft:clay_ball", "gtceu:brick_wooden_form"])
    event.recipes.minecraft.smelting("minecraft:brick", "kubejs:unfired_clay_brick")
    event.recipes.minecraft.crafting_shaped("minecraft:bricks", ['CCC', 'CBC', 'CCC'], {
        C: "minecraft:brick",
        B: { "type": "bucketlib:fluid", "tag": "minecraft:water" }
    })
    event.recipes.minecraft.crafting_shaped("minecraft:paper", ['CCC', 'CBC', 'CCC'], {
        C: "#forge:dusts/wood",
        B: { "type": "bucketlib:fluid", "tag": "minecraft:water" }
    })

    event.recipes.minecraft.crafting_shaped("minecraft:nether_bricks", ['CCC', 'CBC', 'CCC'], {
        C: "minecraft:nether_brick",
        B: { "type": "bucketlib:fluid", "fluid": "minecraft:lava" }
    })

    event.recipes.minecraft.crafting_shaped("minecraft:furnace", ['SSS', 'FFF', 'SSS'], {
        S: "#forge:cobblestone",
        F: "minecraft:flint"
    })

    event.recipes.minecraft.crafting_shaped("minecraft:blast_furnace", ['III', 'IMI', 'IFI'], {
        I: "#forge:plates/iron",
        M: "#forge:tools/mallets",
        F: "minecraft:furnace"
    })
    event.recipes.gtceu.assembler('minecraft:blast_furnace').EUt(30).duration(300).itemInputs('5x #forge:plates/iron').itemInputs('minecraft:furnace').itemOutputs("minecraft:blast_furnace")


})
ServerEvents.tags("block", event => {
    event.add("minecraft:flowers", "iguanatweaksreborn:cyan_flower")
    event.add("minecraft:small_flowers", "iguanatweaksreborn:cyan_flower")
})