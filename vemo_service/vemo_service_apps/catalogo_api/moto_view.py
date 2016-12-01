from rest_framework import serializers, viewsets

from vemo_service_apps.catalogo.models.moto import Moto


class MotoSerializer(serializers.ModelSerializer):

    # motor_nombre = serializers.ReadOnlyField(
    #     source='motor.marca')

    class Meta:

        fields = '__all__'
        model = Moto


class MotoViewSet(viewsets.ModelViewSet):
    queryset = Moto.objects.all()
    serializer_class = MotoSerializer
