const item = "Rua A";


QUnit.test("AddItem test", function(assert)
{
    let itemsTest = new ItemsList()
    itemsTest.addItem(item);
    assert.deepEqual(itemsTest.itemsArray, ["Rua A"], "The item was inserted in itemsArray.");
})

QUnit.test("RemoveItem test", function(assert)
{
    let itemsTest = new ItemsList();
    itemsTest.addItem(item);
    assert.deepEqual(itemsTest.itemsArray, ["Rua A"], "The item was inserted in itemsArray.");
    itemsTest.removeItem(item);
    assert.equal(itemsTest.itemsArray.length, 0, "The item was removed from itemsArray.");
})

QUnit.test("setItemActive test", function(assert)
{
    let itemsTest = new ItemsList();
    itemsTest.addItem(item);
    assert.deepEqual(itemsTest.itemsArray, ["Rua A"], "The item was inserted in itemsArray.");
    itemsTest.setItemActive(item);
    assert.deepEqual(itemsTest.selectedItemsArray, ["Rua A"], "The item was inserted in selectedItemsArray (selected)");
})

QUnit.test("setItemInactive test", function(assert)
{
    let itemsTest = new ItemsList();
    itemsTest.addItem(item);
    assert.deepEqual(itemsTest.itemsArray, ["Rua A"], "The item was inserted in itemsArray.");
    itemsTest.setItemActive(item);
    assert.deepEqual(itemsTest.selectedItemsArray, ["Rua A"], "The item was inserted in selectedItemsArray (selected)");
    itemsTest.setItemInactive(item);
    assert.deepEqual(itemsTest.selectedItemsArray, [], "The item was removed from selectedItemsArray (unselected)");
    assert.deepEqual(itemsTest.itemsArray, ["Rua A"], "The item stands in itemsArray.");
})