ServerEvents.recipes(event => {
    event.remove({ mod: "fluidtank" })
    event.recipes.gtceu.alloy_smelter('kubejs:obsidian_glass').EUt(7).duration(200).itemInputs(["#forge:glass", "4x #forge:dusts/obsidian"]).itemOutputs('kubejs:obsidian_glass')
    event.recipes.minecraft.crafting_shaped("fluidtank:tank_wood", ['SRS', 'wGs', 'SRS'], {
        S: "#forge:screws/iron",
        R: "#forge:rings/iron",
        w: "#forge:tools/wrenches",
        s: "#forge:tools/screwdrivers",
        G: 'kubejs:obsidian_glass'
    })
    event.recipes.minecraft.crafting_shaped("fluidtank:tank_wood", ['SRS', 'wGs', 'SRS'], {
        S: "#forge:screws/iron",
        R: "#forge:rings/iron",
        w: "#forge:tools/wrenches",
        s: "#forge:tools/screwdrivers",
        G: "#railcraft:strengthened_glass"
    })
    event.recipes.minecraft.crafting_shaped(
        "fluidtank:tank_iron", ['SPS', 'GTG', 'hPs'], {
        S: "#forge:screws/iron",
        P: "#forge:double_plates/iron",
        h: "#forge:tools/hammers",
        s: "#forge:tools/screwdrivers",
        T: "fluidtank:tank_wood",
        G:"#forge:glass_panes"
    })
    event.recipes.minecraft.crafting_shaped(
        "fluidtank:tank_gold", ['SPS', 'GTG', 'hPs'], {
        S: "#forge:screws/gold",
        P: "#forge:double_plates/gold",
        h: "#forge:tools/hammers",
        s: "#forge:tools/screwdrivers",
        T: "fluidtank:tank_wood",
        G:"#forge:glass_panes"
    })
    event.recipes.minecraft.crafting_shaped(
        "fluidtank:tank_silver", ['SPS', 'GTG', 'hPs'], {
        S: "#forge:screws/silver",
        P: "#forge:double_plates/silver",
        h: "#forge:tools/hammers",
        s: "#forge:tools/screwdrivers",
        T: "fluidtank:tank_wood",
        G:"#forge:glass_panes"
    })
    event.recipes.minecraft.crafting_shaped(
        "fluidtank:tank_copper", ['SPS', 'GTG', 'hPs'], {
        S: "#forge:screws/copper",
        P: "#forge:double_plates/copper",
        h: "#forge:tools/hammers",
        s: "#forge:tools/screwdrivers",
        T: "fluidtank:tank_wood",
        G:"#forge:glass_panes"
    })
    event.recipes.minecraft.crafting_shaped(
        "fluidtank:steel", ['SPS', 'GTG', 'hPs'], {
        S: "#forge:screws/steel",
        P: "#forge:double_plates/steel",
        h: "#forge:tools/hammers",
        s: "#forge:tools/screwdrivers",
        T: "fluidtank:tank_wood",
        G:"#forge:glass_panes"
    })
    event.recipes.minecraft.crafting_shaped(
        "fluidtank:tank_diamond", ['SPS', 'GTG', 'hPs'], {
        S: "#forge:screws/diamond",
        P: "#forge:plates/diamond",
        h: "#forge:tools/hammers",
        s: "#forge:tools/screwdrivers",
        T: "fluidtank:tank_wood",
        G:"#forge:glass_panes"
    })
    event.recipes.minecraft.crafting_shaped(
        "fluidtank:aluminum", ['SPS', 'GTG', 'hPs'], {
        S: "#forge:screws/aluminium",
        P: "#forge:double_plates/aluminium",
        h: "#forge:tools/hammers",
        s: "#forge:tools/screwdrivers",
        T: "fluidtank:tank_wood",
        G:"#forge:glass_panes"
    })
    event.recipes.minecraft.crafting_shaped(
        "fluidtank:stainless_steel", ['SPS', 'GTG', 'hPs'], {
        S: "#forge:screws/stainless_steel",
        P: "#forge:double_plates/stainless_steel",
        h: "#forge:tools/hammers",
        s: "#forge:tools/screwdrivers",
        T: "fluidtank:tank_wood",
        G:"#forge:glass_panes"
    })
    event.recipes.minecraft.crafting_shaped(
        "fluidtank:titanium", ['SPS', 'GTG', 'hPs'], {
        S: "#forge:screws/titanium",
        P: "#forge:double_plates/titanium",
        h: "#forge:tools/hammers",
        s: "#forge:tools/screwdrivers",
        T: "fluidtank:tank_wood",
        G:"#forge:glass_panes"
    })
    event.recipes.minecraft.crafting_shaped(
        "fluidtank:tungstensteel", ['SPS', 'GTG', 'hPs'], {
        S: "#forge:screws/tungsten_steel",
        P: "#forge:double_plates/tungsten_steel",
        h: "#forge:tools/hammers",
        s: "#forge:tools/screwdrivers",
        T: "fluidtank:tank_wood",
        G:"#forge:glass_panes"
    })

    event.recipes.gtceu.assembler("fluidtank:tank_wood").EUt(7).duration(100).itemInputs(["#railcraft:strengthened_glass", "2x #forge:rings/iron"]).itemOutputs("fluidtank:tank_wood")
    event.recipes.gtceu.assembler("fluidtank:tank_wood_2").EUt(7).duration(100).itemInputs(["kubejs:obsidian_glass", "2x #forge:rings/iron"]).itemOutputs("fluidtank:tank_wood")
    event.recipes.gtceu.assembler("fluidtank:tank_copper").circuit(4).EUt(30).duration(300).itemInputs(["fluidtank:tank_wood", "#forge:double_plates/copper"]).inputFluids(Fluid.of('gtceu:glass', 144)).itemOutputs("fluidtank:tank_copper")
    event.recipes.gtceu.assembler("fluidtank:tank_iron").circuit(4).EUt(30).duration(400).itemInputs(["fluidtank:tank_wood", "#forge:double_plates/iron"]).inputFluids(Fluid.of('gtceu:glass', 144)).itemOutputs("fluidtank:tank_iron")
    event.recipes.gtceu.assembler("fluidtank:tank_silver").circuit(4).EUt(30).duration(400).itemInputs(["fluidtank:tank_wood", "#forge:double_plates/silver"]).inputFluids(Fluid.of('gtceu:glass', 144)).itemOutputs("fluidtank:tank_silver")
    event.recipes.gtceu.assembler("fluidtank:tank_steel").circuit(4).EUt(30).duration(500).itemInputs(["fluidtank:tank_wood", "#forge:double_plates/steel"]).inputFluids(Fluid.of('gtceu:glass', 144)).itemOutputs("fluidtank:steel")
    event.recipes.gtceu.assembler("fluidtank:tank_gold").circuit(4).EUt(30).duration(600).itemInputs(["fluidtank:tank_wood", "#forge:double_plates/gold"]).inputFluids(Fluid.of('gtceu:glass', 144)).itemOutputs("fluidtank:tank_gold")
    event.recipes.gtceu.assembler("fluidtank:tank_diamond").circuit(4).EUt(30).duration(800).itemInputs(["fluidtank:tank_wood", "#forge:plates/diamond"]).inputFluids(Fluid.of('gtceu:glass', 144)).itemOutputs("fluidtank:tank_diamond")
    event.recipes.gtceu.assembler("fluidtank:tank_aluminum").circuit(4).EUt(30).duration(1000).itemInputs(["fluidtank:tank_wood", "#forge:double_plates/aluminium"]).inputFluids(Fluid.of('gtceu:glass', 144)).itemOutputs("fluidtank:aluminum")
    event.recipes.gtceu.assembler("fluidtank:tank_stainless_steel").circuit(4).EUt(30).duration(1100).itemInputs(["fluidtank:tank_wood", "#forge:double_plates/stainless_steel"]).inputFluids(Fluid.of('gtceu:glass', 144)).itemOutputs("fluidtank:stainless_steel")
    event.recipes.gtceu.assembler("fluidtank:tank_titanium").circuit(4).EUt(30).duration(1200).itemInputs(["fluidtank:tank_wood", "#forge:double_plates/titanium"]).inputFluids(Fluid.of('gtceu:glass', 144)).itemOutputs("fluidtank:titanium")
    event.recipes.gtceu.assembler("fluidtank:tank_tungstensteel").circuit(4).EUt(30).duration(1300).itemInputs(["fluidtank:tank_wood", "#forge:double_plates/tungsten_steel"]).inputFluids(Fluid.of('gtceu:glass', 144)).itemOutputs("fluidtank:tungstensteel")
})