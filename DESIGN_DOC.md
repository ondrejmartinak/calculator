The store map

App -
--Bolts
  --Bolt
    --Shapes
       --Diameter
       --Length
       --Threaded
  --TotalSurfaceArea(Calculated)
  --TotalCurrentRequired(Calculated)



Storage(Firebase)
Storing bolt:
{
  id: unique
  type: "BOLT", "PLATE"
  name: ("M6 30 Panhead" or "M6 30 Panhead")
  detail: (" threaded full" or " threaded part 20" )
  parts: [{
    type: CYLINDER
    height: number
    diameter: number
    threaded: boolean
    threadPitch: number
  },
  {
    type: FLAT
    height: number
    length: number
    width: number
  },
  {
    type: HEXAGONAL
    side: number
    height: number
    diameter: number (outer)
  }]
}



