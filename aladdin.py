def shopping_list(number: int, **kwargs):
    budget = number
    basket = 0
    result = ''
    if budget < 100:
        return 'You do not have enough budget.'
    for i in kwargs:
        price = kwargs[i][0]
        qty = kwargs[i][1]
        total_price = price * qty
        if budget > total_price:
            budget -= total_price
            result += f"You bought {i} for {total_price:.2f} leva." + '\n'
            basket += 1
            if basket == 5:
                return result
    return result
    # print(kwargs)
    # print(budget)
    # for i in kwargs:
    #     print(i, kwargs[i])


print(shopping_list(100,
                    microwave=(70, 2),
                    skirts=(15, 4),
                    coffee=(1.50, 10),
                    ))