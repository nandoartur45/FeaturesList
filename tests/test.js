QUnit.test("AddItem test", function(assert)
{
    let item = "Rua A";
    itemsTest = new ItemsList("containerAddress", "containerShadow", "okbutton")
    itemsTest.addItem(item);
    assert.equal(item, "Rua A", "THE ITEM'S CODE IS ALIVE");
    assert.equal(itemsTest.itemsArray, "Rua A", "THE ITEMSARRAY'S CODE IS ALIVE");
})