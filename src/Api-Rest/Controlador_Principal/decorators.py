from django.contrib import messages
from django.shortcuts import redirect

def chofer_required(view_func):
    def wrapper(request, *args, **kwargs):
        if request.user.is_authenticated and request.user.rol == 'chofer':
            return view_func(request, *args, **kwargs)
        else:
            messages.error(request, 'Acceso denegado')
            return redirect('index')
    return wrapper

def administrador_required(view_func):
    def wrapper(request, *args, **kwargs):
        if request.user.is_authenticated and request.user.rol == 'administrador':
            return view_func(request, *args, **kwargs)
        else:
            messages.error(request, 'Acceso denegado')
            return redirect('index')
    return wrapper