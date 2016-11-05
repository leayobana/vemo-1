from django.conf.urls import url, include
from rest_framework import routers

from .categoria_view import CategoriaViewSet
from .autor_view import AutorViewSet
from .libro_view import LibroViewSet
from .cliente_view import ClienteViewSet


router = routers.DefaultRouter()

router.register(r'categorias', CategoriaViewSet)
router.register(r'autors', AutorViewSet, 'autors-view')
router.register(r'libros', LibroViewSet, 'libros-view')

router.register(r'clientes', ClienteViewSet, 'clientes-view')
urlpatterns = [

    url(r'^', include(router.urls)),

]
