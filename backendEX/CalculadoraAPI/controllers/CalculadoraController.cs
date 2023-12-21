using System;
using Microsoft.AspNetCore.Mvc;

namespace CalculadoraAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculadoraController : ControllerBase
    {
        public class Calculo
        {
            public double Numero1 { get; set; }
            public double Numero2 { get; set; }
            public string Operacao { get; set; }
        }

        [HttpPost]
        public ActionResult<double> Post(Calculo calculo)
        {
            double resultado = 0;
            switch (calculo.Operacao)
            {
                case "soma":
                    resultado = calculo.Numero1 + calculo.Numero2;
                    break;
                case "subtracao":
                    resultado = calculo.Numero1 - calculo.Numero2;
                    break;
                case "multiplicacao":
                    resultado = calculo.Numero1 * calculo.Numero2;
                    break;
                case "divisao":
                    if (calculo.Numero2 != 0)
                    {
                        resultado = calculo.Numero1 / calculo.Numero2;
                    }
                    else
                    {
                        return BadRequest("Divisão por zero não é permitida.");
                    }
                    break;
                default:
                    return BadRequest("Operação desconhecida.");
            }

            return resultado;
        }
    }
}
