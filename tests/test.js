QUnit.test("AddItem test", function(assert)
{
    let item = "Rua A";
    ItemsList = new ItemsList("containerAddress", "containerShadow", "okbutton")
    ItemsList.addItem(item);
    assert.equal(item, "Rua A", "THE ITEM'S CODE IS ALIVE");
    assert.equal(itemsArray, "Rua A", "THE ITEMSARRAY'S CODE IS ALIVE");
})