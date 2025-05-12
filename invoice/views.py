import jdatetime
import json
import os

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, JsonResponse
from django.template.loader import render_to_string
from django.conf import settings


from weasyprint import HTML
from datetime import datetime

@csrf_exempt
def invoice_page(request):
    return render(request, 'invoice.html')


@csrf_exempt
def havaleh(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            
            # Convert the current UTC time to Jalali
            current_time = datetime(2025, 5, 8, 13, 23, 21)  # Your provided timestamp
            jalali_datetime = jdatetime.datetime.fromgregorian(datetime=current_time)
            persian_date = jalali_datetime.strftime('%Y/%m/%d')  # Format as YYYY/MM/DD in Persian
            
            # Calculate total weight
            total_weight = 0
            for item in data.get('items', []):
                try:
                    total_weight += float(item.get('weight', 0))
                except (ValueError, TypeError):
                    pass

            context = {
                'date': persian_date,  # Use the Persian date here
                'serial': data.get('serial', ''),
                'items': data.get('items', []),
                'total_weight': f"{total_weight:,.0f}",
                'note': data.get('note', ''),
            }

            # Generate HTML
            html_string = render_to_string('havaleh.html', context)
            
            # Create PDF using WeasyPrint with base_url for static files
            html = HTML(string=html_string, base_url=request.build_absolute_uri('/'))
            pdf = html.write_pdf()
            
            # Return the PDF
            response = HttpResponse(pdf, content_type='application/pdf')
            response['Content-Disposition'] = f'attachment; filename=havaleh_{data.get("serial", "")}.pdf'
            return response

        except Exception as e:
            print(f"Error: {str(e)}")  # For debugging
            return JsonResponse({
                'error': f'Server Error: {str(e)}',
                'status': 'error'
            }, status=500)


@csrf_exempt
def SalesOrder(request):
    return render(request, 'SalesOrder.html')

@csrf_exempt
def Purchases(request):
    if request.method == 'POST':

        items = []
        
        goods_codes = request.POST.getlist('goods_code')
        goods_comments_list = request.POST.getlist('goods_comments')
        goods_counts = request.POST.getlist('goods_count')
        units = request.POST.getlist('unit')
        unit_prices = request.POST.getlist('unit_price')

        total_price = 0
        total_taxes = 0

        for i in range(len(goods_codes)):
            try:
                count = int(goods_counts[i])
                price = float(unit_prices[i])
                subtotal = count * price
                tax = subtotal * 0.1
                total = subtotal + tax

                item = {
                    'goods_code': goods_codes[i],
                    'goods_comments': goods_comments_list[i],
                    'goods_count': count,
                    'unit': units[i],
                    'unit_price': price,
                    'subtotal': subtotal,
                    'tax': tax,
                    'total': total
                }

                items.append(item)
                total_price += subtotal
                total_taxes += tax
            except (ValueError, IndexError):
                continue  # Skip invalid input rows

        grand_total = total_price + total_taxes

        context = {
            'items': items,
            'total_price': total_price,
            'total_taxes': total_taxes,
            'grand_total': grand_total,
        }

    return render(request, 'Purchases.html')

