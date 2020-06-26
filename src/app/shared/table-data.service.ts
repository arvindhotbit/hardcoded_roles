import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {Neutralscheme,Bicscheme,Interdefination,sanctioned,internalwatchlist,Highriskcountry,Zonevsglobal} from './tabular';


@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  selectedneu:  Neutralscheme;
   selectedbic :  Bicscheme;
   selectedinterdef : Interdefination;
   selectedsanction : sanctioned;
   selectedinterwatch:internalwatchlist;   
   selectedhrc : Highriskcountry;   
   selectedzvg : Zonevsglobal;                
  constructor(private http : HttpClient) { }
  readonly _base_url:string = "http://localhost:3000/api";


// Neutral-words api call start*************************************
neutrallistpage():Observable<Neutralscheme[]>
{ return  this.http.get<Neutralscheme[]>(this._base_url + '/neutral_words')};

neutrallistpost(neuscheme:Neutralscheme)
{ return this.http.post<any>(this._base_url + '/add_neutral_words',neuscheme)};

neutrallistput(neuscheme:Neutralscheme)
{ return this.http.put<any>(this._base_url + '/update_neutralWords' + `/${neuscheme.REF_KEY}`,neuscheme)};

neutrallistdelete(REF_KEY:string)
{return this.http.delete(this._base_url + '/del_neutral_words' + `/${REF_KEY}`)};
// Neutral-words api call end*************************************





// Blacklist-bic api call start*************************************

bicfetch():Observable<Bicscheme[]>
{ return  this.http.get<Bicscheme[]>(this._base_url + '/blacklist_bic')};

bicpost(bicblack:Bicscheme)
{ return this.http.post<any>(this._base_url + '/add_blacklisted_bic',bicblack)};

bicput(bicblack:Bicscheme)
{ return this.http.put<any>(this._base_url +'/update_blacklistedBic' + `/${bicblack.REF_KEY}`,bicblack)};

bicdelete(REF_KEY:string)
{return this.http.delete(this._base_url + '/del_blacklisted_bic' + `/${REF_KEY}`)};
// Blacklist-bic api call end*************************************




// internallist-defination api call start************************************

fetchinter():Observable<Interdefination[]>
{ return  this.http.get<Interdefination[]>(this._base_url + '/internal_list')};

postinter(interdefs:Interdefination)
{ return this.http.post<any>(this._base_url + '/add_internal_list_def',interdefs)};

putinter(interdefs:Interdefination)
{ return this.http.put<any>(this._base_url + '/update_internalListDef' + `/${interdefs.REF_KEY}`,interdefs)};

deleteinter(REF_KEY:string)
{return this.http.delete(this._base_url + '/del_internal_list' + `/${REF_KEY}`)};
// internallist-defination api call start*************************************




// Sanctioned cities api call start*************************************

fetchsanction():Observable<sanctioned[]>
{ return  this.http.get<sanctioned[]>(this._base_url + '/sanctioned_cities')};

postsanction(sanction:sanctioned)
{ return this.http.post<any>(this._base_url + '/add_sanctioned_cities',sanction)};

putsanction(sanction:sanctioned)
{ return this.http.put<any>(this._base_url + '/update_sanctionedCities' + `/${sanction.REF_KEY}`,sanction)};

deletesanction(REF_KEY:string)
{return this.http.delete(this._base_url + '/del_sanctioned_cities' + `/${REF_KEY}`)};
// Sanctioned cities api call start*************************************


// internal-watchlist api call start*************************************

fetchinterwatch():Observable<internalwatchlist[]>
{ return  this.http.get<internalwatchlist[]>(this._base_url + '/internal_watchlist')};

postinterwatch(interwatch:internalwatchlist)
{ return this.http.post<any>(this._base_url + '/add_internal_watchlist',interwatch)};

putinterwatch(interwatch:internalwatchlist)
{ return this.http.put<any>(this._base_url + '/update_internalWatchList' + `/${interwatch.UID_SERIAL_NO}`,interwatch)};

deleteinterwatch(UID_SERIAL_NO:string)
{return this.http.delete(this._base_url + '/del_internal_watchlist'+ `/${UID_SERIAL_NO}`)};
// internal-watchlist api call start*************************************



// High-Risk-Cities api call start*************************************


fetchhrc():Observable<Highriskcountry[]>
{ return  this.http.get<Highriskcountry[]>(this._base_url + '/high_risk_countries')};

posthrc(hrc:Highriskcountry)
{ return this.http.post<any>(this._base_url + '/add_highRiskCountry',hrc)};

puthrc(hrc:Highriskcountry)
{ return this.http.put<any>(this._base_url+ '/update_highRishCountry' + `/${hrc.REF_KEY}`,hrc)};

deletehrc(REF_KEY:string)
{return this.http.delete(this._base_url + '/del_highRiskCountry' + `/${REF_KEY}`)};
// High-Risk-Cities api call start*************************************



// Zone_vs_global api call start*************************************
fetchzvg():Observable<Zonevsglobal[]>
{ return  this.http.get<Zonevsglobal[]>(this._base_url + '/zone_x_global_keywords')};

postzvg(zvg:Zonevsglobal)
{ return this.http.post<any>(this._base_url + '/add_zone_global_keywords',zvg)};

putzvg(zvg:Zonevsglobal)
{ return this.http.put<any>(this._base_url + '/update_zoneGlobalKeywords' + `/${zvg.REF_KEY}`,zvg)};

deletezvg(REF_KEY:string)
{return this.http.delete(this._base_url + '/del_zone_global_keywords' + `/${REF_KEY}`)};
// Zone_vs_global api call start*************************************

}
