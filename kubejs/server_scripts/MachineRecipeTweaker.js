ServerEvents.recipes(event => {
    //Coke Oven (GT)
    event.remove({ id: "gtceu:shaped/coke_oven" })
    event.remove({ id: "gtceu:shaped/coke_oven_hatch" })
    event.remove({ id: "railcraft:coke_oven_bricks" })
    event.remove({ type: "railcraft:coking" })
    event.recipes.minecraft.crafting_shaped("gtceu:empty_wooden_form", [' P ', 'PBP',' P '], {
        P: "#forge:paper",
        B:"#minecraft:planks"
    })
    event.recipes.minecraft.crafting_shapeless("gtceu:coke_oven", ["gtceu:coke_oven_bricks", "#forge:tools/mallets"])
    event.recipes.minecraft.crafting_shaped("gtceu:coke_oven_hatch", [' P ', 'PCP', ' P '], { P: "#minecraft:planks", C: "gtceu:coke_oven_bricks" })
    //Primitive Pump
    event.remove({id:"gtceu:shaped/pump_hatch"})
    event.remove({id:"gtceu:shaped/primitive_pump"})
    event.recipes.minecraft.crafting_shaped("gtceu:primitive_pump", ['RSp', 'MTp', 'LPL'], {
        R:"#forge:rings/stainless_steel",
        S:"#forge:screws/stainless_steel",
        p:"gtceu:hv_electric_pump",
        M:"#forge:rotors/stainless_steel",
        T:"fluidtank:tank_wood",
        L:"minecraft:cobblestone_slab",
        P:"gtceu:treated_wood_planks"
    })
    event.recipes.minecraft.crafting_shaped("gtceu:pump_hatch", ['SRG','pIp','LPL'], {
        L:"minecraft:cobblestone_slab",
        P:"gtceu:treated_wood_planks",
        I:"gtceu:wood_large_fluid_pipe",
        G:"#forge:glass",
        p:"gtceu:hv_electric_pump",
        S:"#forge:screws/stainless_steel",
        R:"#forge:rings/stainless_steel"
    })
    //Primitive Blast Furnace
    event.remove({ id: "gtceu:shaped/casing_primitive_bricks" })
    event.remove({ id: "gtceu:shaped/bronze_primitive_blast_furnace" })
    event.remove({ id: "gtceu:extractor/extract_white_concrete" })
    event.remove({ id: "gtceu:extractor/extract_concrete_dust" })
    event.remove({ id: "gtceu:mixer/concrete_from_calcite" })
    event.remove({ id: "gtceu:mixer/concrete_from_marble" })
    event.remove({ id: "gtceu:mixer/concrete_from_clay" })
    event.recipes.minecraft.crafting_shaped("gtceu:firebricks", ['BPB', 'BCB', 'BPB'], {
        B: "gtceu:firebrick",
        P: "#forge:dusts/gypsum",
        C: { "type": "bucketlib:fluid", "fluid": "gtceu:concrete" }
    })
    event.recipes.minecraft.crafting_shaped("gtceu:concrete_bucket", ['CBS', 'CWQ', ' Y '], {
        C: "#forge:dusts/calcite",
        B: "minecraft:bucket",
        S: "#forge:dusts/stone",
        W: { "type": "bucketlib:fluid", "tag": "minecraft:water" },
        Q: "#forge:dusts/quartz_sand",
        Y: "#forge:dusts/clay"
    })
    event.recipes.minecraft.crafting_shaped({ "nbt": "{Fluid:{Amount:1000,FluidName:\"gtceu:concrete\"}}", "item": "ceramicbucket:ceramic_bucket", "type": "minecraft:item_nbt" }, ['CBS', 'CWQ', ' Y '], {
        C: "#forge:dusts/calcite",
        B: "ceramicbucket:ceramic_bucket",
        S: "#forge:dusts/stone",
        W: { "type": "bucketlib:fluid", "tag": "minecraft:water" },
        Q: "#forge:dusts/quartz_sand",
        Y: "#forge:dusts/clay"
    })
    event.recipes.minecraft.crafting_shaped("gtceu:primitive_blast_furnace", ['BFB', 'FWF', 'BFB'], {
        B: "gtceu:firebricks",
        F: "blast_furnace",
        W: "#forge:tools/wrenches"
    })
    event.recipes.minecraft.crafting_shapeless("gtceu:clay_dust", ["#minecraft:terracotta", "#forge:tools/mortars"])
    event.recipes.gtceu.mixer("gtceu:concrete").EUt(16).duration(20).inputFluids(Fluid.of('minecraft:water', 1000)).itemInputs(["2x #forge:dusts/calcite", "#forge:dusts/stone", "#forge:dusts/quartz_sand", "#forge:dusts/clay"]).outputFluids(Fluid.of("gtceu:concrete", 1000))
    event.recipes.gtceu.assembler("gtceu:firebricks").EUt(16).duration(20).inputFluids(Fluid.of('gtceu:concrete', 4000)).itemInputs(["8x #forge:dusts/gypsum", "24x gtceu:firebrick"]).itemOutputs("4x gtceu:firebricks")
    event.recipes.gtceu.extractor("extract_white_concrete").EUt(120).duration(30).itemInputs("#forge:concrete").outputFluids(Fluid.of('gtceu:concrete', 144))
    event.recipes.gtceu.extractor("extract_concrete_dust").EUt(120).duration(30).itemInputs("#forge:dusts/concrete").outputFluids(Fluid.of('gtceu:concrete', 144))
    //RC water collector(water tank)
    event.remove({id:"railcraft:water_tank_siding"})
    event.recipes.minecraft.crafting_shaped("railcraft:water_tank_siding",['PPP','RSR','PPP'],{
        P:"#minecraft:planks",
        R:"#forge:rods/iron",
        S:"gtceu:sticky_resin"
    })
    event.recipes.gtceu.assembler("railcraft:water_tank_siding_1").EUt(7).duration(200).itemInputs(["2x #forge:frames/wood","#forge:rods/iron"]).inputFluids(Fluid.of("gtceu:glue",36)).itemOutputs("railcraft:water_tank_siding")
    event.recipes.gtceu.assembler("railcraft:water_tank_siding_2").EUt(30).duration(200).itemInputs(["4x #forge:frames/wood","4x #forge:bolts/steel"]).inputFluids(Fluid.of("gtceu:glue",72)).itemOutputs("3x railcraft:water_tank_siding")
    event.recipes.gtceu.assembler("railcraft:water_tank_siding_3").EUt(30).duration(200).itemInputs(["#forge:frames/wood","2x #forge:bolts/steel"]).inputFluids(Fluid.of("gtceu:polyethylene",36)).itemOutputs("3x railcraft:water_tank_siding")
    event.recipes.gtceu.assembler("railcraft:water_tank_siding_4").EUt(120).duration(200).itemInputs(["4x #forge:frames/wood","4x #forge:bolts/stainless_steel"]).inputFluids(Fluid.of("gtceu:polyethylene",72)).itemOutputs("9x railcraft:water_tank_siding")
    //RC advanced coke oven (blast furnace)
    event.remove({id:"railcraft:blast_furnace_bricks"})
    event.remove({ type: "railcraft:blasting" })
    event.recipes.gtceu.compressor('railcraft:blast_furnace_bricks').EUt(2).duration(300).itemInputs("4x kubejs:advanced_coke_oven_brick").itemOutputs('railcraft:blast_furnace_bricks')
    event.recipes.gtceu.electric_blast_furnace("kubejs:advanced_coke_oven_brick").blastFurnaceTemp(1200).EUt(120).duration(600).inputFluids(Fluid.of("gtceu:oxygen",1000)).itemInputs(['kubejs:infernal_brick','gtceu:coke_oven_brick']).itemOutputs("kubejs:advanced_coke_oven_brick")
    event.recipes.gtceu.electric_blast_furnace("kubejs:hot_netherrack_brick").blastFurnaceTemp(1200).EUt(120).duration(600).inputFluids(Fluid.of("gtceu:oxygen",1000)).itemInputs("minecraft:nether_brick").itemOutputs('kubejs:hot_netherrack_brick')
    event.recipes.gtceu.chemical_bath('kubejs:infernal_brick').EUt(30).duration(200).inputFluids(Fluid.of("gtceu:distilled_water",1000)).itemInputs("kubejs:hot_netherrack_brick").itemOutputs('kubejs:infernal_brick')
    event.recipes.gtceu.macerator("kubejs:advanced_coke_oven_brick_dust_1").EUt(120).duration(200).itemInputs("kubejs:advanced_coke_oven_brick").itemOutputs("kubejs:advanced_coke_oven_brick_dust")
    event.recipes.gtceu.macerator("kubejs:advanced_coke_oven_brick_dust_2").EUt(120).duration(200).itemInputs('railcraft:blast_furnace_bricks').itemOutputs("4x kubejs:advanced_coke_oven_brick_dust")
    event.custom({ "type": "railcraft:blasting", "cookingTime": 20, "experience": 0.0, "ingredient": { "item": "minecraft:coal" }, "result": { "count": 1, "item": "gtceu:coke_gem" }, "slagOutput": 2 })
    event.custom({ "type": "railcraft:blasting", "cookingTime": 20, "experience": 0.0, "ingredient": { "tag": "minecraft:logs_that_burn" }, "result": { "count": 1, "item": "minecraft:charcoal" }, "slagOutput": 1 })
    event.custom({ "type": "railcraft:blasting", "cookingTime": 5, "experience": 0.0, "ingredient": { "item": "minecraft:sugar_cane" }, "result": { "count": 1, "item": "gtceu:sugar_charcoal" }, "slagOutput": 1 })
    event.custom({ "type": "railcraft:blasting", "cookingTime": 5, "experience": 0.0, "ingredient": { "item": "gtceu:sugar_charcoal" }, "result": { "count": 1, "item": "gtceu:sugar_coke" }, "slagOutput": 1 })
    event.custom({ "type": "railcraft:blasting", "cookingTime": 5, "experience": 0.0, "ingredient": { "item": "minecraft:cactus" }, "result": { "count": 1, "item": "gtceu:cactus_charcoal" }, "slagOutput": 1 })
    event.custom({ "type": "railcraft:blasting", "cookingTime": 5, "experience": 0.0, "ingredient": { "item": "gtceu:cactus_charcoal" }, "result": { "count": 1, "item": "gtceu:cactus_coke" }, "slagOutput": 1 })
})