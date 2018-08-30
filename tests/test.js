const item = "Rua A";


QUnit.test("AddItem test", function(assert)
{
    itemsTest = new ItemsList()
    itemsTest.addItem(item);
    assert.deepEqual(itemsTest.itemsArray, ["Rua A"], "The item was inserted in itemsArray.");
})

QUnit.test("RemoveItem test", function(assert)
{
    itemsTest = new ItemsList();
    itemsTest.addItem(item);
    assert.deepEqual(itemsTest.itemsArray, ["Rua A"], "itemsArray contains 'Rua A'.");
    itemsTest.removeItem(item);
    assert.equal(itemsTest.itemsArray.length, 0, "itemsArray is empty.");
})

QUnit.test("setItemActive test", function(assert)
{
    itemsTest = new ItemsList();
    itemsTest.addItem(item);
    itemsTest.setItemActive(itemId);
    assert.deepEqual(itemsList.selectedItemsArray, ["Rua A"], "The 'active' class exists.");
})