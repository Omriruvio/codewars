// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.pageSize = itemsPerPage;
  let slice = [...this.collection];
  this.pages = [];
  while (slice.length > 0) {
    this.pages.push(slice.splice(0, this.pageSize));
  }
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.itemCount() / this.pageSize);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  if (pageIndex > this.pageCount() - 1 || pageIndex < 0) return -1;
  return this.pages[pageIndex].length;
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (itemIndex > this.collection.length - 1 || itemIndex < 0) return -1;
  return Math.ceil((itemIndex + 1) / this.pageSize) - 1;
};

it('Should do pagination magic', () => {
  const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  let helper = new PaginationHelper(collection, 10);

  expect(helper.pageCount()).toBe(3);

  expect(helper.pageItemCount(1)).toBe(10);
  expect(helper.pageItemCount(2)).toBe(4);
  expect(helper.pageItemCount(3)).toBe(-1);
  expect(helper.pageIndex(40)).toBe(-1);

  expect(helper.pageIndex(22)).toBe(2);
  expect(helper.pageIndex(3)).toBe(0);
  expect(helper.pageIndex(0)).toBe(0);
  expect(helper.pageIndex(-1)).toBe(-1);
  expect(helper.pageIndex(-23)).toBe(-1);
  expect(helper.pageIndex(-15)).toBe(-1);

  expect(helper.itemCount()).toBe(24);

  helper = new PaginationHelper([], 10);
  expect(helper.pageIndex(0)).toBe(-1);
});
