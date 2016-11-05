from rest_framework import serializers, viewsets
# from django.db.models import Clientes 

from django.db.models.cliente import cliente
# from vemo_service_apps.model.model.Cliente import Clientes

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = "__all__"
        # fields = ('url', 'username', 'email', 'is_staff')


class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(codigo__icontains=query),
                    Q(nombre__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
