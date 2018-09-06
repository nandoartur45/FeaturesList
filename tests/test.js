const item = {"id": "1", "label": "Rua A"};
const validationArray = [{"id":"1", "label":"Rua A"}];

QUnit.test("AddItem test", function(assert)
{
    let itemsTest = new ItemsList();
    itemsTest.addItem(item);
    assert.deepEqual(itemsTest.itemsArray, validationArray, "The item was inserted in itemsArray.");
});

QUnit.test("RemoveItem test", function(assert)
{
    let itemsTest = new ItemsList();
    itemsTest.addItem(item);
    assert.deepEqual(itemsTest.itemsArray, validationArray, "The item was inserted in itemsArray.");
    itemsTest.removeItem(item.id);
    assert.equal(itemsTest.itemsArray.length, 0, "The item was removed from itemsArray.");
});

QUnit.test("setItemActive test", function(assert)
{
    let itemsTest = new ItemsList();
    itemsTest.addItem(item);
    assert.deepEqual(itemsTest.itemsArray, validationArray, "The item was inserted in itemsArray.");
    itemsTest.setItemActive(item);
    assert.deepEqual(itemsTest.selectedItemsArray, validationArray, "The item was inserted in selectedItemsArray (selected)");
})

QUnit.test("setItemInactive test", function(assert)
{
    let itemsTest = new ItemsList();
    itemsTest.addItem(item);
    assert.deepEqual(itemsTest.itemsArray,validationArray, "The item was inserted in itemsArray.");
    itemsTest.setItemActive(item);
    assert.deepEqual(itemsTest.selectedItemsArray, validationArray, "The item was inserted in selectedItemsArray (selected)");
    itemsTest.setItemInactive(item.id);
    assert.deepEqual(itemsTest.selectedItemsArray, [], "The item was removed from selectedItemsArray (unselected)");
    assert.deepEqual(itemsTest.itemsArray, validationArray, "The item stands in itemsArray.");
})