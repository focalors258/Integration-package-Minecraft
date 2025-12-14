/*
EntityJSEvents.biomeSpawns(event => {

    //let biomes: Internal.List_<string> = ['undergarden:barren_abyss'];'quark:forgotten' regions_unexplored:shrubland_

    event.addSpawn('quark:forgotten', ['#undergarden:barren_abyss'], 1000, 10, 20)

    event.addSpawn('quark:forgotten', ['#minecraft:ocean'], 1000, 10, 20)

    event.addSpawn('upgrade_aquatic:thrasher', ['#minecraft:ocean'], 1000, 10, 20)
//upgrade_aquatic:thrasher



})
*/
 /** 
EntityJSEvents.spawnPlacement(event => {//只能用原版实体

    // Add an "and" predicate: Only allow drowned to spawn above y level 44
  
    event.and('aether:phyg', (entitypredicate, levelaccessor, spawntype, blockpos, randomsource) => {

console.log('2353534  '+levelaccessor.level)

        return true//levelaccessor.levelupgrade_aquatic:thrasher
    })
   
        // Add an "or" predicate: Allow enderman to spawn outside the End dimension
        event.or('minecraft:enderman', (entitypredicate, levelaccessor, spawntype, blockpos, randomsource) => {
            return levelaccessor.level.dimension != 'minecraft:the_end';
        });
    
        // Replace spawn rules: Allow blaze spawns in the Overworld
        event.replace('minecraft:blaze', 'no_restrictions', 'world_surface', (entitypredicate, levelaccessor, spawntype, blockpos, randomsource) => {
            return levelaccessor.level.dimension == 'minecraft:overworld';
        });
        
       
})
//
//
//e.spawner.spawnerEntity.
//   
//})
//


  
EntityJSEvents.spawnPlacement(event => {

    // Add an "and" predicate: Only allow drowned to spawn above y level 44
  
    event.and('upgrade_aquatic:thrasher', (entitypredicate, levelaccessor, spawntype, blockpos, randomsource) => {

        return levelaccessor.level.getBiome(blockpos.x, blockpos.y, blockpos.z).toString() == '#minecraft:ocean'
    })
   
        // Add an "or" predicate: Allow enderman to spawn outside the End dimension
        event.or('minecraft:enderman', (entitypredicate, levelaccessor, spawntype, blockpos, randomsource) => {
            return levelaccessor.level.dimension != 'minecraft:the_end';
        });
    
        // Replace spawn rules: Allow blaze spawns in the Overworld
        event.replace('minecraft:blaze', 'no_restrictions', 'world_surface', (entitypredicate, levelaccessor, spawntype, blockpos, randomsource) => {
            return levelaccessor.level.dimension == 'minecraft:overworld';
        });
        
       
})


*/





ForgeEvents.onEvent('net.minecraftforge.event.entity.SpawnPlacementRegisterEvent',e=>{

})


//StartupEvents.registry(,te=>{
//
//
//   
//})


