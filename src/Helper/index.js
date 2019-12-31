const formatPrice = price => {
          return (price / 100).toLocaleString('zh', {
                    style: 'currency',
                    currency: 'CNY'
          });
};
export { formatPrice };
