ServerEvents.recipes(event => {
    event.remove({type:"gtceu:electric_blast_furnace",output:"#forge:dusts/aluminium"})
    event.recipes.gtceu.compressor('founding_aluminium').EUt(2).duration(100).itemInputs("#forge:dusts/aluminium").itemOutputs("kubejs:cast_aluminium")
    event.recipes.gtceu.electric_blast_furnace('cast_aluminium_to_aluminium_1').blastFurnaceTemp(1300).EUt(120).duration(1400).itemInputs("kubejs:cast_aluminium").itemOutputs("gtceu:aluminium_ingot")
    event.recipes.gtceu.electric_blast_furnace('cast_aluminium_to_aluminium_2').blastFurnaceTemp(1300).EUt(120).duration(1200).itemInputs("kubejs:cast_aluminium").inputFluids(Fluid.of("gtceu:nitrogen",1000)).itemOutputs("gtceu:aluminium_ingot")
    event.recipes.gtceu.electric_blast_furnace('aluminium_dust_to_aluminium_1').blastFurnaceTemp(2054).EUt(480).duration(1400).itemInputs("#forge:dusts/aluminium").itemOutputs("gtceu:aluminium_ingot")
    event.recipes.gtceu.electric_blast_furnace('aluminium_dust_to_aluminium_2').blastFurnaceTemp(2054).EUt(480).duration(1200).itemInputs("#forge:dusts/aluminium").inputFluids(Fluid.of("gtceu:nitrogen",1000)).itemOutputs("gtceu:aluminium_ingot")
})