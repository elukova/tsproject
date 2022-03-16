
import { renderBlock } from './lib.js'
export function renderSearchFormBlock (arrivalDate ?: Date, departureDate ?: Date) : void {
    arrivalDate = arrivalDate || new Date (new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1 )
    departureDate = departureDate || new Date (new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3)
    const lastDayNextMonthDate : Date = new Date(new Date().getFullYear(), new Date().getMonth() + 2, 0)
    const dateToString = (date : Date) : string => date.getFullYear()+ '-'+('0'+date.getMonth()+1).slice(-2)+'-'+('0' + date.getDate()).slice(-2)
    const now : string = dateToString (new Date())
    const arrival : string = dateToString (arrivalDate)
    const departure : string = dateToString (departureDate)
    const lastDayNextMonth : string = dateToString (lastDayNextMonthDate)
    renderBlock(
        'search-form-block',
        `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${arrival}" min="${now}" max="${lastDayNextMonth}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${departure}" min="${now}" max="${lastDayNextMonth}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
    )
}
