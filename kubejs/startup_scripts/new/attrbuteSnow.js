//const Ui = Java.loadClass('META-INF.jarjar.l2tabs-0.3.3.jar.dev.xkmc.l2tabs.tabs.contents.AttributeEntry')//导入属性显示界面

const irons_spellbooks = Java.loadClass('io.redspace.ironsspellbooks.api.registry.AttributeRegistry')//导入铁魔法的属性


//Java.loadClass('devx')META-INF.jarjar.l2tabs-0.3.3.jar.dev.xkmc.l2tabs.tabs.contents.



StartupEvents.postInit(event => {


 //  Ui.add(irons_spellbooks.MAX_MANA, false, 1500);
 //  Ui.add(irons_spellbooks.MANA_REGEN, true, 1600);
 //  //Ui.add()
    //Ui.add(irons_spellbooks.SPELL_POWER, true, 1700);
    //Ui.add(irons_spellbooks.SPELL_RESIST, true, 1800);
  //  Ui.add(irons_spellbooks.COOLDOWN_REDUCTION, true, 1900);
    // todo 现仍未支持翻页，后续用数据包替代
    // $AttributeEntry.add($AttributeRegistry.SUMMON_DAMAGE, true, 11000);
    
 //$AttributeEntry.add($AttributeRegistry.FIRE_MAGIC_RESIST, true, 12000);
    // $AttributeEntry.add($AttributeRegistry.ICE_MAGIC_RESIST, true, 13000);
    // $AttributeEntry.add($AttributeRegistry.HOLY_MAGIC_RESIST, true, 14000);
    // $AttributeEntry.add($AttributeRegistry.BLOOD_MAGIC_RESIST, true, 15000);
    // $AttributeEntry.add($AttributeRegistry.ENDER_MAGIC_RESIST, true, 16000);
    // $AttributeEntry.add($AttributeRegistry.EVOCATION_MAGIC_RESIST, true, 17000);
    // $AttributeEntry.add($AttributeRegistry.NATURE_MAGIC_RESIST, true, 18000);
    // $AttributeEntry.add($AttributeRegistry.LIGHTNING_MAGIC_RESIST, true, 19000);


    // $AttributeEntry.add($AttributeRegistry.FIRE_SPELL_POWER, true, 12500);
    // $AttributeEntry.add($AttributeRegistry.ICE_SPELL_POWER, true, 13500);
    // $AttributeEntry.add($AttributeRegistry.HOLY_SPELL_POWER, true, 14500);
    // $AttributeEntry.add($AttributeRegistry.BLOOD_SPELL_POWER, true, 15500);
    // $AttributeEntry.add($AttributeRegistry.ENDER_SPELL_POWER, false, 16500);
    // $AttributeEntry.add($AttributeRegistry.EVOCATION_SPELL_POWER, true, 17500);
    // $AttributeEntry.add($AttributeRegistry.NATURE_SPELL_POWER, true, 18500);
    // $AttributeEntry.add($AttributeRegistry.LIGHTNING_SPELL_POWER, true, 19500);
})