from uuid import uuid4
from django.db import models
#from .libro import Libro
# from .moto import Moto



class Moto(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)

    nombre = models.CharField(max_length=60, blank=True, null=True)
    tipo = models.CharField(max_length=60, blank=True, null=True)
    motor = models.CharField(max_length=60, blank=True, null=True)
    descripcion = models.CharField(max_length=60, blank=True, null=True)

    class Meta:
        verbose_name = "Moto"
        verbose_name_plural = "Motos"
        #  permissions = (
        #     ('list_moto', 'Can list moto'),
        #     ('get_moto', 'Can get moto'),
        # )

    def __str__(self):
        return " %s " % (self.moto)
