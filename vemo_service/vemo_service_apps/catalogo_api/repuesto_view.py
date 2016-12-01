from rest_framework import serializers, viewsets

from vemo_service_apps.catalogo.models.repuesto import Repuesto


class RepuestoSerializer(serializers.ModelSerializer):

    # Repuestor_nombre = serializers.ReadOnlyField(
    #     source='Repuestor.marca')

    class Meta:

        fields = '__all__'
        model = Repuesto



class RepuestoViewSet(viewsets.ModelViewSet):
    queryset = Repuesto.objects.all()
    serializer_class = RepuestoSerializer
