from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category

def product_list(request):
    products = Product.objects.all().values()  
    return JsonResponse(list(products), safe=False)

def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    return JsonResponse({
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active
    })

def category_list(request):
    categories = Category.objects.all().values()
    return JsonResponse(list(categories), safe=False)

def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    return JsonResponse({
        "id": category.id,
        "name": category.name
    })

def products_by_category(request, id):
    products = Product.objects.filter(category_id=id).values()
    return JsonResponse(list(products), safe=False)
