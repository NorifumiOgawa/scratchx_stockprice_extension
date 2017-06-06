(function(ext) {
  ext._shutdown = function() {};

  ext._getStatus = function() {
    return {status: 2, msg: 'Ready'};
  };
    
  ext.get_stock_price = function(exchange, ticker, callback) {
    $.ajax({
      url: 'https://www.google.com/finance/info?client=ig&q=' + encodeURIComponent(exchange) + '%3A' + encodeURIComponent(ticker),
      dataType: 'jsonp',
      success: function(data) {
        callback(data[0].l);
      }
    });
  };

  var descriptor = {
    blocks: [
      ['R', '%m.exchange 市場 銘柄コード%s の株価', 'get_stock_price', 'TYO']
    ],
    menus: {
      exchange: ['TYO', 'NASDAQ']
    },
  };

  ScratchExtensions.register('Stock price extension', descriptor, ext);
})({});